import { Component, EventEmitter, Output } from '@angular/core';
import { PlantsService } from '../plants.service';
import { Datum, Plant, Watering } from '../plant';
import { PersonalPlant } from '../personal-plant';

@Component({
  selector: 'app-plant-search',
  templateUrl: './plant-search.component.html',
  styleUrls: ['./plant-search.component.css']
})
export class PlantSearchComponent {
  @Output() personalQSave = new EventEmitter<PersonalPlant>();
  plants:Plant[] = [];
  data:Datum[] = [];
  newPersonal:PersonalPlant = ({} as any) as PersonalPlant;
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
       console.log(this.plants.length);
       for(let i = 0; i<this.plants.length; i++){
         for(let j = 0; j<this.plants[i].data.length;j++){
          this.data.push(this.plants[i].data[j]);
       }
      }
    }
  )
}
}


  // loadPages():void{
  //   for(let i = 1; i<201; i++){
  //   this.API.getPage(i).subscribe(
  //     (result) => {
  //       this.plants.push(result);
       
  //     }
  //   )
    //this.data = this.plants.data;
    
    
  //  console.log(this.data);


  loadFrq():void{
    for (let i = 1; i < this.data.length; i++){
      if (this.data[i].watering === "Frequent"){
        console.log(this.data)
      }
    }
  }

  loadAvg():void{
    for (let i = 1; i < this.data.length; i++){
      if (this.data[i].watering === "Average"){
        console.log(this.data)
      }
    }
  }

  loadMin():void{
    for (let i = 1; i < this.data.length; i++){
      if (this.data[i].watering === "Minimal"){
        console.log(this.data)
      }
    }
  }

  searchRecommended():void{
    if (this.frqIsChecked === true){
      this.loadFrq()
    }
    else if (this.avgIsChecked === true){
      this.loadAvg()
    }
    else if (this.minIsChecked === true){
      this.loadMin()
    }
    else if (this.allIsChecked === true){
      this.loadPages();
    }
    else {
      console.log("How did you get here?");
    }
  }

  addPersonalPlant(id:number){
    for (let i = 0; i<this.data.length; i++){
      if(this.data[i].id===id){
        this.newPersonal = this.data[i];
        const d = new Date()
        let da:number = d.getDay()
        this.newPersonal.day = da;
      }
    }
    this.API.addToPersonal(this.newPersonal).subscribe(
      () => {
        this.personalQSave.emit(this.newPersonal);
        this.newPersonal = ({} as any) as PersonalPlant;
      }
    );

  }
}
