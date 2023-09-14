import { Component } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css'],
})
export class ViewRecipeComponent {
  recipes!: Recipe[];
  constructor(private server: ServerService) {}

  ngOnInit() {
    this.recipes = this.getAllRecipes();
  }

  getAllRecipes() {
    const data = this.server.getRecipes();
    console.log(data);
    return data;
  }

  deleteRecipe(id: any) {
    const data = this.server.deleteRecipe(id);
    console.log(data);
    this.recipes = this.getAllRecipes();
  }
}
