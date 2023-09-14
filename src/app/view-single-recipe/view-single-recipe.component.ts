import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ServerService } from '../server.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-single-recipe',
  templateUrl: './view-single-recipe.component.html',
  styleUrls: ['./view-single-recipe.component.css']
})
export class ViewSingleRecipeComponent {
  recipe!:Recipe;
  recipeId:any;
  

  constructor(private server:ServerService, private route:ActivatedRoute) { 
  }

  ngOnInit(){
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.recipe = this.getRecipe(this.recipeId);
  }

  getRecipe(id:any){
    const data = this.server.getRecipe(id)
    console.log(data);
    return data;
  }
}