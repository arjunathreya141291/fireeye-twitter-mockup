import { Component, OnInit } from '@angular/core';
import {appService} from '../service/app.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  itemList: [];
  constructor(private _appService: appService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this._appService.getJSON().subscribe(data =>{
      this.itemList = data;
    });
  }

}
