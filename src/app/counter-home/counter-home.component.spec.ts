import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterHomeComponent } from './counter-home.component';

describe('CounterHomeComponent', () => {
  let component: CounterHomeComponent;
  let fixture: ComponentFixture<CounterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
