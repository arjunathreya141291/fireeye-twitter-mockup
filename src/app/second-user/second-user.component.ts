import { Component, OnInit } from '@angular/core';
import {appService} from '../service/app.service';

@Component({
  selector: 'app-second-user',
  templateUrl: './second-user.component.html',
  styleUrls: ['./second-user.component.css']
})
export class SecondUserComponent implements OnInit {
  itemList: [];
  tweet: string;
  newItemsAdded: any[] = [];
  constructor(private _appService: appService) { }

  ngOnInit() {
    this.getItems();
    this.newItemsAdded = this._appService.getValueForSecondUser();
  }

  getItems(){
    this._appService.getJSONForSecondUser().subscribe(data =>{
      this.itemList = data;
    });
  }

  addItems() {
    this.newItemsAdded.unshift({
      name : 'Second User',
      handle: '@SS',
      desc: this.tweet,
      picture: './assets/two.png'
    });
    this._appService.setValueForSecondUser(this.newItemsAdded);
  }

}
