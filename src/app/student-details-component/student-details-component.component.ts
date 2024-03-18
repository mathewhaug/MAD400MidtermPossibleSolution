import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentServiceService } from '../services/student-service.service';


@Component({
  selector: 'app-student-details-component',
  standalone: true,
  imports: [],
  templateUrl: './student-details-component.component.html',
  styleUrl: './student-details-component.component.scss'
})
export class StudentDetailsComponentComponent {
  @Input() contentItem?: Student;

}
