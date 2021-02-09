import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { Person } from '../shared/models/person.interface';
//import {Estudios} from './estudios'

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios:Person[];

  constructor(private personsService: PersonsService) { }

  ngOnInit() {
    this.personsService.getEstus().subscribe((data: Person[])=>{
      console.log(data);
      this.estudios = data;})
  }


}
