import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrudDeleteComponent } from './modal-crud-delete.component';

describe('ModalCrudDeleteComponent', () => {
  let component: ModalCrudDeleteComponent;
  let fixture: ComponentFixture<ModalCrudDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrudDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrudDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
