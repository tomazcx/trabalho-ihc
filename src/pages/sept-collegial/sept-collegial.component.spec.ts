import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptCollegialComponent } from './sept-collegial.component';

describe('SeptCollegialComponent', () => {
  let component: SeptCollegialComponent;
  let fixture: ComponentFixture<SeptCollegialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptCollegialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptCollegialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
