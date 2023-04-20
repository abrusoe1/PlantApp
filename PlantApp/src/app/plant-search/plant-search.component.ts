import { Component } from '@angular/core';
import { PlantsService } from '../plants.service';
import { Datum, Plant, Watering } from '../plant';

@Component({
  selector: 'app-plant-search',
  templateUrl: './plant-search.component.html',
  styleUrls: ['./plant-search.component.css']
})
export class PlantSearchComponent {
  plants:Plant[] = [];
  data:Datum[] = [];
  frqIsChecked: boolean = false;
  avgIsChecked: boolean = false;
  minIsChecked: boolean = false;
  allIsChecked: boolean = false;
  constructor(private API:PlantsService){}

  ngOnInit(){
    this.loadPages();
  }

  loadPages():void{
    for(let i = 1; i<201; i++){
    this.API.getPage(i).subscribe(
      (result) => {
        this.plants.push(result);
       
      }
    )
    //this.data = this.plants.data;
    
    } 
    console.log(this.data);
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
      this.loadPages();
    }
    else {
      console.log("How did you get here?");
    }
  }
}
