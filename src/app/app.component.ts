import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StudentListComponentComponent} from "./student-list-component/student-list-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mad400MidtermAnswer';
}
