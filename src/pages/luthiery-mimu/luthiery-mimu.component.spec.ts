import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuthieryMimuComponent } from './luthiery-mimu.component';

describe('LuthieryMimuComponent', () => {
  let component: LuthieryMimuComponent;
  let fixture: ComponentFixture<LuthieryMimuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuthieryMimuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuthieryMimuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
