import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTopicComponent } from './about-topic.component';

describe('AboutTopicComponent', () => {
  let component: AboutTopicComponent;
  let fixture: ComponentFixture<AboutTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTopicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
