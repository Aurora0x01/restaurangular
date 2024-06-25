
import { Component } from '@angular/core';
import { MainNavComponent } from './main-nav/main-nav.component'; // Adjust the path if necessary

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MainNavComponent] // Import the MainNavComponent here
})
export class AppComponent {
  title = 'restaurangular';
}
