import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPageComponent } from './grid-page.component';

describe('GridPageComponent', () => {
  let component: GridPageComponent;
  let fixture: ComponentFixture<GridPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
