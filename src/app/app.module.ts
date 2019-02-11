import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';
import { CounterHomeComponent } from './counter-home/counter-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NavComponent,
    CounterHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
