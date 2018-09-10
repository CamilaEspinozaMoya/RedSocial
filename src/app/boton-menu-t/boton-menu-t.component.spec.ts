import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonMenuTComponent } from './boton-menu-t.component';

describe('BotonMenuTComponent', () => {
  let component: BotonMenuTComponent;
  let fixture: ComponentFixture<BotonMenuTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonMenuTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonMenuTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
