import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  recipes!: Recipe[];
  localItem: any;

  constructor() {
    this.recipes = this.getRecipes();
  }

  getRecipes(): Recipe[] {
    this.localItem = localStorage.getItem('recipes');
    if (this.localItem == null) {
      return [];
    } else {
      return JSON.parse(this.localItem);
    }
  }

  addRecipe(recipe: Recipe): Recipe {
    if (this.recipes.length == 0) {
      recipe.id = 1;
    } else {
      recipe.id = Number(this.recipes[this.recipes.length-1].id) + 1;
    }
    this.recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
    this.recipes = this.getRecipes();
    return recipe;
  }

  getRecipe(recipeId: number): Recipe {
    return this.recipes.filter((recipe) => {
      return recipe.id == recipeId;
    })[0];
  }

  deleteRecipe(recipeId: number) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id != recipeId;
    });
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
  }

  updateRecipe(toUpdateRecipe: Recipe) {
    this.recipes = this.recipes.map((recipe) => {
      if (toUpdateRecipe.id == recipe.id) {
        recipe = toUpdateRecipe;
      }
      return recipe;
    });
    localStorage.setItem("recipes", JSON.stringify(this.recipes));
    return toUpdateRecipe;
  }
}
