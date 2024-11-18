import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptSystemsListComponent } from './sept-systems-list.component';

describe('SeptSystemsListComponent', () => {
  let component: SeptSystemsListComponent;
  let fixture: ComponentFixture<SeptSystemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptSystemsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptSystemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
