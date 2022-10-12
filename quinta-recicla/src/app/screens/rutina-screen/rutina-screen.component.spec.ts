import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaScreenComponent } from './rutina-screen.component';

describe('RutinaScreenComponent', () => {
  let component: RutinaScreenComponent;
  let fixture: ComponentFixture<RutinaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
