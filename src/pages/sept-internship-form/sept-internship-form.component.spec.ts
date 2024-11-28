import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptInternshipFormComponent } from './sept-internship-form.component';

describe('SeptInternshipFormComponent', () => {
  let component: SeptInternshipFormComponent;
  let fixture: ComponentFixture<SeptInternshipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptInternshipFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptInternshipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
