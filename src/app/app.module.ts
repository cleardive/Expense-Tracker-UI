import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseNavBarComponent } from './expense-nav-bar/expense-nav-bar.component';
import { ExpenseSideBarComponent } from './expense-side-bar/expense-side-bar.component';
import { ExpenseTransactionPageComponent } from './expense-transaction-page/expense-transaction-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseNavBarComponent,
    ExpenseSideBarComponent,
    ExpenseTransactionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
