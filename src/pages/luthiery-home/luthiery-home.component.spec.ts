import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuthieryHomeComponent } from './luthiery-home.component';

describe('LuthieryHomeComponent', () => {
  let component: LuthieryHomeComponent;
  let fixture: ComponentFixture<LuthieryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuthieryHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuthieryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
