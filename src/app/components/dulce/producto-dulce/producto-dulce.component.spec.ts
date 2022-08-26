import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDulceComponent } from './producto-dulce.component';

describe('ProductoDulceComponent', () => {
  let component: ProductoDulceComponent;
  let fixture: ComponentFixture<ProductoDulceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoDulceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoDulceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
