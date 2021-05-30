import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromPageComponent } from './from-page.component';

describe('FromPageComponent', () => {
  let component: FromPageComponent;
  let fixture: ComponentFixture<FromPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
