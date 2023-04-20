import { Component } from '@angular/core';
import { PlantsService } from '../plants.service';
import { Datum, Plant } from '../plant';
import { PersonalPlant } from '../personal-plant';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  plants:Datum = ({} as any) as Datum;
  data:Datum[] = [];
  personalPlantData:PersonalPlant[] = [];

  constructor(private API:PlantsService){}

  ngOnInit(){
    this.loadPersonal();
  }

  loadPersonal():void{
    this.API.getAllPersonal().subscribe(
      (result) => {
        this.personalPlantData = result;
      }
    )
  }
}

