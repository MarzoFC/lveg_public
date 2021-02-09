import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { Person } from '../shared/models/person.interface';
@Component({
  selector: 'app-productores',
  templateUrl: './productores.component.html',
  styleUrls: ['./productores.component.css']
})
export class ProductoresComponent implements OnInit {


  productores:Person[];
  constructor(private personsService: PersonsService) { }

  ngOnInit() {
    this.personsService.getProds().subscribe((data: Person[])=>{
      console.log(data);
      this.productores = data;})
  }


}
