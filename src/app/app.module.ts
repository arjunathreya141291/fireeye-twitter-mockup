import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstUserComponent } from './first-user/first-user.component';
import { SecondUserComponent } from './second-user/second-user.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {appService} from './service/app.service';
import { TrendsComponent } from './trends/trends.component';
import { CopyrightComponent } from './copyright/copyright.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstUserComponent,
    SecondUserComponent,
    HeaderComponent,
    TrendsComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
