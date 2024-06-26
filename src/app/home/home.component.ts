import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    NgIf // Import NgIf if you're using *ngIf in your template
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pancakes = 'assets/images/pancakes.jpg';

  constructor() { }

  ngOnInit() { }
}
