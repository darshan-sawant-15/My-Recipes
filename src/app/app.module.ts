import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewSingleRecipeComponent } from './view-single-recipe/view-single-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeHomeComponent,
    AddRecipeComponent,
    ViewRecipeComponent,
    UpdateRecipeComponent,
    ViewSingleRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
