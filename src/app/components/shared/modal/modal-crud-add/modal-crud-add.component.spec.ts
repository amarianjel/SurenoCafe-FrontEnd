import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrudAddComponent } from './modal-crud-add.component';

describe('ModalCrudAddComponent', () => {
  let component: ModalCrudAddComponent;
  let fixture: ComponentFixture<ModalCrudAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrudAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrudAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
