import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class appService {
  items: any[] = [];
  secondItems: any[] = [];
  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/firstUserData.json");
  }
  public getJSONForSecondUser(): Observable<any> {
    return this.http.get("./assets/secondUserData.json");
  }
  public setValue(items){
    this.items = items;
  }

  public getValue(){
    return this.items;
  }

  public setValueForSecondUser(items){
    this.secondItems = items;
  }

  public getValueForSecondUser(){
    return this.secondItems;
  }
}
