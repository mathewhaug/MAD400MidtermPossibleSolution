/*
We need to create a service that will return each part the student object
 */
import { Injectable } from '@angular/core';
import {Observable,of} from "rxjs";
import {CONTENT} from "../mock-content/content";
import { Student } from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }
  //Function that will return an Array of type student, containing content
  //Remember content is the actual data that we want to display
  //and Student is the object defenition that we want to use
  getContent(): Student[]{
    return CONTENT;
  }

  /*
  This method takes a studentName of type string as an argument and returns an
  Observable of type Student[], indicating that it emits an array of Student objects.
   */
  getContentByName(studentName: string): Observable<Student[]>{
    return of(CONTENT.filter(content => content.studentName == studentName));
  }
}
