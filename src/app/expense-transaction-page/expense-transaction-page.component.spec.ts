import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTransactionPageComponent } from './expense-transaction-page.component';

describe('ExpenseTransactionPageComponent', () => {
  let component: ExpenseTransactionPageComponent;
  let fixture: ComponentFixture<ExpenseTransactionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseTransactionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseTransactionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
