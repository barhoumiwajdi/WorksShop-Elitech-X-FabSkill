import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepriceComponent } from './tableprice.component';

describe('TablepriceComponent', () => {
  let component: TablepriceComponent;
  let fixture: ComponentFixture<TablepriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablepriceComponent]
    });
    fixture = TestBed.createComponent(TablepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
