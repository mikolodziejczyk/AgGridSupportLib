import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanGridFilterComponent } from './boolean-grid-filter.component';

describe('BooleanGridFilterComponent', () => {
  let component: BooleanGridFilterComponent;
  let fixture: ComponentFixture<BooleanGridFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooleanGridFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanGridFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
