import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaShareComponent } from './social-media-share.component';

describe('SocialMediaShareComponent', () => {
  let component: SocialMediaShareComponent;
  let fixture: ComponentFixture<SocialMediaShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaShareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
