import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptHistoryComponent } from './sept-history.component';

describe('SeptHistoryComponent', () => {
  let component: SeptHistoryComponent;
  let fixture: ComponentFixture<SeptHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
