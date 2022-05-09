import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRecetaScreenComponent } from './item-receta-screen.component';

describe('ItemRecetaScreenComponent', () => {
  let component: ItemRecetaScreenComponent;
  let fixture: ComponentFixture<ItemRecetaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRecetaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRecetaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
