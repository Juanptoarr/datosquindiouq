import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolesComponent } from './goles.component';

describe('GolesComponent', () => {
  let component: GolesComponent;
  let fixture: ComponentFixture<GolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
