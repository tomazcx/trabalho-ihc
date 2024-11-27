import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptFacultyComponent } from './sept-faculty.component';

describe('SeptFacultyComponent', () => {
  let component: SeptFacultyComponent;
  let fixture: ComponentFixture<SeptFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptFacultyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
