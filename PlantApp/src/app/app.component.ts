import { Component } from '@angular/core';
import { PlantsService } from './plants.service';
import { Plant } from './plant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlantApp';
  plants:Plant[] = [];
  constructor(private API:PlantsService){}

  loadMembers():void{
    this.API.getAllPlants().subscribe(
      (result) => {
        this.plants = result;
      }
    )
  }
}
