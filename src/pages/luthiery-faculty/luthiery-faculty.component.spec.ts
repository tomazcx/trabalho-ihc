import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuthieryFacultyComponent } from './luthiery-faculty.component';

describe('LuthieryFacultyComponent', () => {
  let component: LuthieryFacultyComponent;
  let fixture: ComponentFixture<LuthieryFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuthieryFacultyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuthieryFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
