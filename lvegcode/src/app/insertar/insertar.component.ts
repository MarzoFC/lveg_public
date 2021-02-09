import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { Person } from '../shared/models/person.interface';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {

  constructor(private personService : PersonsService) { }

  person : Person = {
    id:0,
    name:'',
    info:'',
    contact:'',
    website:'',
    img:'',
    rol:'voz'
  }

  submitted = false;

  //name:string, info:string, website:string,contact:string,rol:string
  newPerson(): void {

    this.submitted = false;
    this.person = {
      id:0,
      name:'',
      info:'',
      contact:'',
      website:'',
      img:'',
      rol:'voz'
    };
    
  }

  add():void{

    const data = {
      name: this.person.name,
      info: this.person.info,
      website: this.person.website,
      img : this.person.img,
      contac: this.person.contact,
      rol:this.person.rol
    };

    this.personService.addPerson(data)
      .subscribe(response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });

  }

  ngOnInit(): void {
  }

}
