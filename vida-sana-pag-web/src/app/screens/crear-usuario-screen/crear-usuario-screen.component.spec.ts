import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioScreenComponent } from './crear-usuario-screen.component';

describe('CrearUsuarioScreenComponent', () => {
  let component: CrearUsuarioScreenComponent;
  let fixture: ComponentFixture<CrearUsuarioScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUsuarioScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUsuarioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
