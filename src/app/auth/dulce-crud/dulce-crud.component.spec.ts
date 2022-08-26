import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulceCrudComponent } from './dulce-crud.component';

describe('DulceCrudComponent', () => {
  let component: DulceCrudComponent;
  let fixture: ComponentFixture<DulceCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DulceCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DulceCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
