import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{
  //We need to create a form group object
  form: FormGroup | undefined;
  /*
 FormGroup expects to be called with an object structure that has properties named for the
  controls that will be in the group set to a value of a new control.
   */

  ngOnInit() {
    this.form = new FormGroup({
      job: new FormControl("Teacher"),
      name: new FormControl(""),
      category: new FormControl(""),
      year: new FormControl("")
    });
  }

  onSubmit(mediaItem: any){
  console.log(mediaItem);


}
}
