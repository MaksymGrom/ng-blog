import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedTreeUiComponent } from './nested-tree-ui.component';

describe('NestedTreeUiComponent', () => {
  let component: NestedTreeUiComponent;
  let fixture: ComponentFixture<NestedTreeUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedTreeUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedTreeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
