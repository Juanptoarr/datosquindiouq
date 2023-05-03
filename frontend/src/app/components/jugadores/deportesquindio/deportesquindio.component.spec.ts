import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportesquindioComponent } from './deportesquindio.component';

describe('DeportesquindioComponent', () => {
  let component: DeportesquindioComponent;
  let fixture: ComponentFixture<DeportesquindioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeportesquindioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeportesquindioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
