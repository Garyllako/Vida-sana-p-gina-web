import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRutinaScreenComponent } from './item-rutina-screen.component';

describe('ItemRutinaScreenComponent', () => {
  let component: ItemRutinaScreenComponent;
  let fixture: ComponentFixture<ItemRutinaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRutinaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRutinaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
