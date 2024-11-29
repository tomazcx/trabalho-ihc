import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptNewsComponent } from './sept-news.component';

describe('SeptNewsComponent', () => {
  let component: SeptNewsComponent;
  let fixture: ComponentFixture<SeptNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
