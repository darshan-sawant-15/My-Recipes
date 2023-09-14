import { Component } from '@angular/core';
import '../Recipe';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ServerService } from '../server.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css'],
})
export class UpdateRecipeComponent {
  editRecipeForm!: FormGroup;
  showAlert: boolean = false;
  recipeId!: any;
  recipe!: Recipe;

  constructor(
    private fb: FormBuilder,
    private server: ServerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editRecipeForm = fb.group({
      id: [''],
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(5),
        ],
      ],
      ingredients: [
        '',
        [
          Validators.required,
          Validators.maxLength(2000),
          Validators.minLength(5),
        ],
      ],
      instructions: [
        '',
        [
          Validators.required,
          Validators.maxLength(5000),
          Validators.minLength(5),
        ],
      ],
      time: ['', [Validators.required, Validators.maxLength(20)]],
      servings: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.recipe = this.getRecipe(this.recipeId);
    this.editRecipeForm.get('id')?.setValue(this.recipeId);
    this.editRecipeForm.get('name')?.setValue(this.recipe.name);
    this.editRecipeForm.get('ingredients')?.setValue(this.recipe.ingredients);
    this.editRecipeForm.get('instructions')?.setValue(this.recipe.instructions);
    this.editRecipeForm.get('time')?.setValue(this.recipe.time);
    this.editRecipeForm.get('servings')?.setValue(this.recipe.servings);
  }

  getRecipe(id: number) {
    return this.server.getRecipe(id); 
  }

  updateRecipe() {
    console.log('editForm', this.editRecipeForm.value);
    this.showAlert = true;
    return this.server.updateRecipe(this.editRecipeForm.value);
    
  }
}
