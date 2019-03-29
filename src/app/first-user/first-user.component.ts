import { Component, OnInit } from '@angular/core';
import {appService} from '../service/app.service';

@Component({
  selector: 'app-first-user',
  templateUrl: './first-user.component.html',
  styleUrls: ['./first-user.component.css']
})
export class FirstUserComponent implements OnInit {
  itemList: any[];
  tweet: string;
  newItemsAdded: any[] = [];
  constructor(private _appService: appService) { }

  ngOnInit() {
    this.getItems();
    this.newItemsAdded = this._appService.getValue();
  }

  getItems(){
    this._appService.getJSON().subscribe(data =>{
      this.itemList = data;
    });
  }

  addItems() {
    this.newItemsAdded.unshift({
      name : 'First User',
      handle: '@fs',
      desc: this.tweet,
      picture: './assets/one.jpeg'
    });
    this._appService.setValue(this.newItemsAdded);
  }

}
