import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuthieryCourseCoordinationComponent } from './luthiery-course-coordination.component';

describe('LuthieryCourseCoordinationComponent', () => {
  let component: LuthieryCourseCoordinationComponent;
  let fixture: ComponentFixture<LuthieryCourseCoordinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuthieryCourseCoordinationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuthieryCourseCoordinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
