import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashComponent } from '../main-dash/main-dash.component';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
  standalone: true,
  imports: [CommonModule, MainDashComponent]
})

export class CarteComponent {
  dogs= [
    {race:'berger allemand', name:'Wolfy'},
    {race:'bulldog anglais', name:'Mac Fly'},
    {race:'caniche', name:'Rasta'},
  ];

  temperatures=[0,5,35,-10];
  constructor(){ }
  ngOnInit(){

  }
}
