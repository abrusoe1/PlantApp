import { Component } from '@angular/core';
import { PlantsService } from '../plants.service';
import { Datum, Plant } from '../plant';
import { PersonalPlant } from '../personal-plant';

@Component({
  selector: 'app-my-plants',
  templateUrl: './my-plants.component.html',
  styleUrls: ['./my-plants.component.css']
})
export class MyPlantsComponent {
  newPersonalPlants:PersonalPlant = ({} as any) as PersonalPlant;
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
  
  deletePersonal(id:number):void{
    this.API.deletePersonal(id).subscribe(
      (result)=>{
        console.log('Item delted at ' + id)
        this.loadPersonal;
      }
    );
  }
  
  //addPersonal here later
}
