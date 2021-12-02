import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentFactura } from './add.component';

describe('AddComponentFactura', () => {
  let component: AddComponentFactura;
  let fixture: ComponentFixture<AddComponentFactura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponentFactura ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentFactura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
