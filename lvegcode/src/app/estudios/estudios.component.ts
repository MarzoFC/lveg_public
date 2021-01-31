import { Component, OnInit } from '@angular/core';
//import {Estudios} from './estudios'

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios = [];

  constructor() { }

  ngOnInit() {
  }

}
