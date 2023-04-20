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
  plants:Plant [] = [];
  data:Datum[] = [];
  aData:Datum = ({} as any) as Datum;
  constructor(private API:PlantsService){

  }

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
    for(let i = 0;i<this.plants.length;i++){
      for(let j = 0; j<this.plants[i].data.length;j++){
      this.aData = this.plants[i].data[j];
      this.data.push(this.aData);

      }
    }
    console.log(this.plants);
  }
}
