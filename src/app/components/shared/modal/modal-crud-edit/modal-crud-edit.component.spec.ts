import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrudEditComponent } from './modal-crud-edit.component';

describe('ModalCrudEditComponent', () => {
  let component: ModalCrudEditComponent;
  let fixture: ComponentFixture<ModalCrudEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrudEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrudEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
