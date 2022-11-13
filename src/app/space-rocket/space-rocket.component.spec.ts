import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceRocketComponent } from './space-rocket.component';

describe('SpaceRocketComponent', () => {
  let component: SpaceRocketComponent;
  let fixture: ComponentFixture<SpaceRocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceRocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceRocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
