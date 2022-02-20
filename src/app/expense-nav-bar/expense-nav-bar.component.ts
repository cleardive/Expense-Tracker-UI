import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-nav-bar',
  templateUrl: './expense-nav-bar.component.html',
  styleUrls: ['./expense-nav-bar.component.css']
})
export class ExpenseNavBarComponent implements OnInit {

  public showAddTrnxBtn: boolean  = false;
  constructor() { }

  ngOnInit(): void {
    this.checkingInnerWidth();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
   this.checkingInnerWidth();
  }

  checkingInnerWidth() {
    if ( window.innerWidth >= 640)
      this.showAddTrnxBtn = true;
    else 
      this.showAddTrnxBtn  = false;
  }
}
