import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptOutletComponent } from './sept-outlet.component';

describe('SeptOutletComponent', () => {
  let component: SeptOutletComponent;
  let fixture: ComponentFixture<SeptOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptOutletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
