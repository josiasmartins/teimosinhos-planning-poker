import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanninComponent } from './plannin.component';

describe('PlanninComponent', () => {
  let component: PlanninComponent;
  let fixture: ComponentFixture<PlanninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
