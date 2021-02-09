import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonsService } from '../persons.service';
import {Person} from '../shared/models/person.interface'
@Component({
  selector: 'app-voces',
  templateUrl: './voces.component.html',
  styleUrls: ['./voces.component.css']
})
export class VocesComponent implements OnInit {
  voces:Person[];

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  constructor(private personsService: PersonsService) { }

  ngOnInit() {
    this.personsService.getVoces().subscribe((data: Person[])=>{
      console.log(data);
      this.voces = data;})
  }

}
