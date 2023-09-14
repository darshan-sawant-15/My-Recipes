import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';
import { ViewSingleRecipeComponent } from './view-single-recipe/view-single-recipe.component';

const routes: Routes = [
  { path: '', component: RecipeHomeComponent },
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
  },
  {
    path: 'update-recipe',
    component: UpdateRecipeComponent,
  },
  {
    path: 'view-recipe',
    component: ViewRecipeComponent,
  },
  {
    path: 'view-single-recipe/:id',
    component: ViewSingleRecipeComponent,
  },
  {
    path: 'update-recipe/:id',
    component: UpdateRecipeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
