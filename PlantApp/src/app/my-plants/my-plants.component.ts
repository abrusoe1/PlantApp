import { Component } from '@angular/core';
import { PlantsService } from '../plants.service';
import { Datum, Plant } from '../plant';
import { PersonalPlant, PersonalPlantJr } from '../personal-plant';

@Component({
  selector: 'app-my-plants',
  templateUrl: './my-plants.component.html',
  styleUrls: ['./my-plants.component.css']
})
export class MyPlantsComponent {
  newPersonalPlants:PersonalPlant = ({} as any) as PersonalPlant;
  personalPlantData:PersonalPlant[] = [];
  personalPlantDataJr:PersonalPlantJr[] = [];
  plantNickname:string = "";
  displayForm:boolean = false;
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
        this.loadPersonal;
      }
    );
  }
  
  addPersonal(newPersonalPlants:PersonalPlant){
    this.personalPlantData.push(newPersonalPlants);
    this.loadPersonal();
  }

  updatePersonal(id:number):void{
    let uPlant:PersonalPlant = this.personalPlantData[id];

    uPlant.nickname = this.plantNickname;
    this.API.updatePersonal(uPlant).subscribe(
      (result) => {
      }
    )
  }
  showForm(i:number):void{
    this.personalPlantDataJr[i].displayForm = !this.personalPlantDataJr[i].displayForm;
    }
  }