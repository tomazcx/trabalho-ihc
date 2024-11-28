import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuthieryOutletComponent } from './luthiery-outlet.component';

describe('LuthieryOutletComponent', () => {
  let component: LuthieryOutletComponent;
  let fixture: ComponentFixture<LuthieryOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuthieryOutletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuthieryOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
