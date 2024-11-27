import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptSectorUnitiesComponent } from './sept-sector-unities.component';

describe('SeptSectorUnitiesComponent', () => {
  let component: SeptSectorUnitiesComponent;
  let fixture: ComponentFixture<SeptSectorUnitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptSectorUnitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptSectorUnitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
