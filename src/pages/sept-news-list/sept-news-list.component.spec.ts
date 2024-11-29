import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptNewsListComponent } from './sept-news-list.component';

describe('SeptNewsListComponent', () => {
  let component: SeptNewsListComponent;
  let fixture: ComponentFixture<SeptNewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptNewsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
