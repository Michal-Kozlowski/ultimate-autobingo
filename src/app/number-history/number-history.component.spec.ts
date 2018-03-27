import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberHistoryComponent } from './number-history.component';

describe('NumberHistoryComponent', () => {
  let component: NumberHistoryComponent;
  let fixture: ComponentFixture<NumberHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
