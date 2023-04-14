import { Component } from '@angular/core';
import { PlantsService } from '../plants.service';
import { Datum, Plant } from '../plant';

@Component({
  selector: 'app-plant-search',
  templateUrl: './plant-search.component.html',
  styleUrls: ['./plant-search.component.css']
})
export class PlantSearchComponent {
  plants:Plant = ({} as any) as Plant;
  data:Datum[] = [];
  constructor(private API:PlantsService){}

  ngOnInit(){
    this.loadPlants();
  }

  loadPlants():void{
    this.API.getAllPlantNames().subscribe(
      (result) => {
        this.plants = result;
        console.log(this.plants);
      }
    )
  }
}

