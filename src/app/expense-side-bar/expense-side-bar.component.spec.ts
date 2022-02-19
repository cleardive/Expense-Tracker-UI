import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseSideBarComponent } from './expense-side-bar.component';

describe('ExpenseSideBarComponent', () => {
  let component: ExpenseSideBarComponent;
  let fixture: ComponentFixture<ExpenseSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
