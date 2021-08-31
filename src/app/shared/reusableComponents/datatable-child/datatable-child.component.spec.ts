import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableChildComponent } from './datatable-child.component';

describe('DatatableChildComponent', () => {
  let component: DatatableChildComponent;
  let fixture: ComponentFixture<DatatableChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
