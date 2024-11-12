import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptHomeComponent } from './sept-home.component';

describe('SeptHomeComponent', () => {
  let component: SeptHomeComponent;
  let fixture: ComponentFixture<SeptHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
