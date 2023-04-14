import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  url:string = "https://perenual.com/api/species-list?key=sk-zKUS64374955e6d69502&page="

  constructor(private http:HttpClient) { }

  getAllPlantNames():Observable<Plant> {
    let plant:Plant;
    for (let i = 1; i < 201; i++) {
    plant = this.http.get<Plant> (this.url + i);
  }
 
}
}
