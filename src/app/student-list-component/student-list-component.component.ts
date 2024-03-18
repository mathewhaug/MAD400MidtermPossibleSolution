import { Component , OnInit} from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';
import { Student } from '../models/student';
import {NgForOf} from "@angular/common";
import {StudentDetailsComponentComponent} from "../student-details-component/student-details-component.component";

@Component({
  selector: 'app-student-list-component',
  standalone: true,
  imports: [
    StudentDetailsComponentComponent,
    NgForOf
  ],
  templateUrl: './student-list-component.component.html',
  styleUrl: './student-list-component.component.scss'
})
export class StudentListComponentComponent implements OnInit{

  content?: Student;
  contentItems: Student[] = [];

  constructor(private studentService: StudentServiceService) {
  }

  ngOnInit():void {
    this.contentItems = this.studentService.getContent();
  }

}
