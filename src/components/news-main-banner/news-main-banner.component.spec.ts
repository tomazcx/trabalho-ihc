import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMainBannerComponent } from './news-main-banner.component';

describe('NewsMainBannerComponent', () => {
  let component: NewsMainBannerComponent;
  let fixture: ComponentFixture<NewsMainBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsMainBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsMainBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
