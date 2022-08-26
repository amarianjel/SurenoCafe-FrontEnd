import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaUsuarioComponent } from './agenda-usuario.component';

describe('AgendaUsuarioComponent', () => {
  let component: AgendaUsuarioComponent;
  let fixture: ComponentFixture<AgendaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
