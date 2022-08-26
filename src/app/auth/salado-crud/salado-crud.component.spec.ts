import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladoCrudComponent } from './salado-crud.component';

describe('SaladoCrudComponent', () => {
  let component: SaladoCrudComponent;
  let fixture: ComponentFixture<SaladoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaladoCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
