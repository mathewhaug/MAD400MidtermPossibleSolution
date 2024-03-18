import { Routes } from '@angular/router';
import {StudentListComponentComponent} from "./student-list-component/student-list-component.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {FormComponent} from "./form/form.component";

export const routes: Routes = [
  {path: 'students', component: StudentListComponentComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: 'form', component: FormComponent},
  {
    path:'**',
    redirectTo: 'page-not-found',
    pathMatch: 'full'
  }
];
