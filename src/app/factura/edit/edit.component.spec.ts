import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentFactura } from './edit.component';

describe('EditComponentFactura', () => {
  let component: EditComponentFactura;
  let fixture: ComponentFixture<EditComponentFactura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponentFactura ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponentFactura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
