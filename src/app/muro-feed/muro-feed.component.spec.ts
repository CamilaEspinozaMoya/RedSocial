import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuroFeedComponent } from './muro-feed.component';

describe('MuroFeedComponent', () => {
  let component: MuroFeedComponent;
  let fixture: ComponentFixture<MuroFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuroFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuroFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
