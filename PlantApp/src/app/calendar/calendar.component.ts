import { Component } from '@angular/core';
import { PlantsService } from '../plants.service';
import { Datum, Plant } from '../plant';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  plants:Plant = ({} as any) as Plant;
  data:Datum[] = [];
  constructor(private API:PlantsService){}

  ngOnInit(){
    this.loadPlants();
  }

  loadPlants():void{
    this.API.getAllPlantNames().subscribe(
      (result: Plant) => {
        this.plants = result;
        console.log(this.plants);
      }
    )
  }
}

