import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseNavBarComponent } from './expense-nav-bar/expense-nav-bar.component';
import { ExpenseSideBarComponent } from './expense-side-bar/expense-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseNavBarComponent,
    ExpenseSideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
