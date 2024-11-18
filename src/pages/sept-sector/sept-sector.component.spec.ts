import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptSectorComponent } from './sept-sector.component';

describe('SeptSectorComponent', () => {
  let component: SeptSectorComponent;
  let fixture: ComponentFixture<SeptSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptSectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
