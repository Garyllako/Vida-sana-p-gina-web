import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRecetaScreenComponent } from './crear-receta-screen.component';

describe('CrearRecetaScreenComponent', () => {
  let component: CrearRecetaScreenComponent;
  let fixture: ComponentFixture<CrearRecetaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRecetaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRecetaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
