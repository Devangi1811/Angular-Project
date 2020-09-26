import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementoneComponent } from './placementone.component';

describe('PlacementoneComponent', () => {
  let component: PlacementoneComponent;
  let fixture: ComponentFixture<PlacementoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
