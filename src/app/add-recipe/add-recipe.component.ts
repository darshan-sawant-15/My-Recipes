import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent {
  addRecipeForm!: FormGroup;
  showAlert:boolean=false;

  constructor(private fb: FormBuilder, private server:ServerService) {
    this.addRecipeForm = fb.group({
      name: [
        '',[
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(5)]
      ],
      ingredients: [
        '',[
        Validators.required,
        Validators.maxLength(2000),
        Validators.minLength(5)]
      ],
      instructions: [
        '',[
        Validators.required,
        Validators.maxLength(5000),
        Validators.minLength(5)]
      ],
      time: ['', [Validators.required, Validators.maxLength(20)]],
      servings: ['', [Validators.required, Validators.min(1)]],
    });

    
  }

  addRecipe(){
    console.log(this.server.addRecipe(this.addRecipeForm.value));
    this.addRecipeForm.reset();
    this.showAlert = true;
  }

}
