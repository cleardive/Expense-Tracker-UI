import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseNavBarComponent } from './expense-nav-bar.component';

describe('ExpenseNavBarComponent', () => {
  let component: ExpenseNavBarComponent;
  let fixture: ComponentFixture<ExpenseNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
