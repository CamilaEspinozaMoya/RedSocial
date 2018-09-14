import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuroFormComponent } from './muro-form.component';

describe('MuroFormComponent', () => {
  let component: MuroFormComponent;
  let fixture: ComponentFixture<MuroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
