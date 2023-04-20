import { Component } from '@angular/core';
import { PlantsService } from '../plants.service';
import { Datum, Plant, Watering } from '../plant';

@Component({
  selector: 'app-plant-search',
  templateUrl: './plant-search.component.html',
  styleUrls: ['./plant-search.component.css']
})
export class PlantSearchComponent {
  plants:Plant = ({} as any) as Plant;
  data:Datum[] = [];
  frqIsChecked: boolean = false;
  avgIsChecked: boolean = false;
  minIsChecked: boolean = false;
  allIsChecked: boolean = false;
  constructor(private API:PlantsService){}

  ngOnInit(){
    this.loadPlants();
  }

  loadPlants():void{
    this.API.getAllPlantNames().subscribe(
      (result) => {
        this.data = result;
      }
    )
  }

  loadFrq():void{
    for (let i = 1; i < this.data.length; i++){
      if (this.data[i].watering === "Frequent"){
        
      }
    }
  }

  loadAvg():void{

  }

  loadMin():void{

  }

  searchRecommended():void{
    if (this.frqIsChecked === true){

    }
    else if (this.avgIsChecked === true){

    }
    else if (this.minIsChecked === true){

    }
    else if (this.allIsChecked === true){
      this.loadPlants();
    }
    else {
      console.log("How did you get here?");
    }
  }
}
