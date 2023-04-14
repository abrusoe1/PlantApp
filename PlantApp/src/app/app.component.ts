import { Component } from '@angular/core';
import { PlantsService } from './plants.service';
import { Datum, Plant } from './plant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlantApp';
  plants:Plant = ({} as any) as Plant;
  data:Datum[] = [];
  constructor(private API:PlantsService){
  

  }

  ngOnInit(){
    this.loadPlants();
  }

  loadPlants():void{
    this.API.getAllPlantNames().subscribe(
      (result: Plant) => {
        this.plants = result;
        this.plants.current_page = 100;
        this.plants.from = 6000;
        this.plants.to = 6000;
        this.plants.per_page = 6000;
        this.plants.data.splice(6000);
        console.log(this.plants.data);
      }
    )
    //this.data = this.plants.data;
    //console.log(this.plants.data);
    
  }
}
