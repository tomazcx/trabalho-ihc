import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSectionComponent } from './academic-section.component';

describe('AcademicSectionComponent', () => {
  let component: AcademicSectionComponent;
  let fixture: ComponentFixture<AcademicSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
