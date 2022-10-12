import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaScreenComponent } from './receta-screen.component';

describe('RecetaScreenComponent', () => {
  let component: RecetaScreenComponent;
  let fixture: ComponentFixture<RecetaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
