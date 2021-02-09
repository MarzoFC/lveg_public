import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import {Person} from '../shared/models/person.interface'
@Component({
  selector: 'app-visuales',
  templateUrl: './visuales.component.html',
  styleUrls: ['./visuales.component.css']
})
export class VisualesComponent implements OnInit {

  visuales:Person[];
  
  constructor(private personsService: PersonsService) { }

  ngOnInit() {
    this.personsService.getViss().subscribe((data: Person[])=>{
      console.log(data);
      this.visuales = data;})
  }


}
