import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class MainDashComponent {
  cards = [
    {titre: 'A  la carte', cols :2,rows:1},
    {titre: 'Burgers', cols :1,rows:1},
    {titre: 'Galettes/crêpes', cols :1,rows:2},
    {titre: 'Pizzas', cols :1,rows:1},
  ]
}
