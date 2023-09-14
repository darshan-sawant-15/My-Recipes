import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleRecipeComponent } from './view-single-recipe.component';

describe('ViewSingleRecipeComponent', () => {
  let component: ViewSingleRecipeComponent;
  let fixture: ComponentFixture<ViewSingleRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSingleRecipeComponent]
    });
    fixture = TestBed.createComponent(ViewSingleRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
