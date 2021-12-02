import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComponentFactura } from './lista.component';

describe('ListaComponentFactura', () => {
  let component: ListaComponentFactura;
  let fixture: ComponentFixture<ListaComponentFactura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaComponentFactura ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComponentFactura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
