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
  plants:Datum = ({} as any) as Datum;
  data:Datum[] = [];
  constructor(private API:PlantsService){

  }

  ngOnInit(){
    this.loadPlants();
  }

  loadPlants():void{
    this.API.getAllPlantNames().subscribe(
      (result) => {
        this.data = result;
      }
    )
    //this.data = this.plants.data;
    //console.log(this.plants.data);
    
  }
}
