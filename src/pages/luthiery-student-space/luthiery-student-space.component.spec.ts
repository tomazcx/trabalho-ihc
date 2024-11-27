import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuthieryStudentSpaceComponent } from './luthiery-student-space.component';

describe('LuthieryStudentSpaceComponent', () => {
  let component: LuthieryStudentSpaceComponent;
  let fixture: ComponentFixture<LuthieryStudentSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuthieryStudentSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuthieryStudentSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
