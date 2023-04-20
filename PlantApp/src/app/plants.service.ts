import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datum, Plant, Watering } from './plant';
import { PersonalPlant } from './personal-plant';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  url:string = "http://localhost:8080/data"
  constructor(private http:HttpClient) { }

  // getAllPlantNames():Observable<Datum[]> {
  //   return this.http.get<Datum[]> (this.url);
  // }

  getPage(page:number):Observable<Plant> {
    return this.http.get<Plant>(this.url + "/"+page);
  }

  // getWater(watering:Watering):Observable<Datum> {
  //   return this.http.get<Datum>(this.url + "/" + watering)
  // }

  //-------------------------------------------------------

  lUrl:string = "http://localhost:8080/plants"  //Short for local URL

  getAllPersonal():Observable<PersonalPlant[]> {
    return this.http.get<PersonalPlant[]> (this.lUrl); 
  }

  getPersonal(id:number):Observable<PersonalPlant> {
    return this.http.get<PersonalPlant>(this.lUrl + "/"+id);
  }

  deletePersonal(id:number):Observable<void> {
    console.log(id);
    return this.http.delete<void>(this.lUrl + "/" + id);
    
  }

  addToPersonal(newFavorite:PersonalPlant):Observable<Object> {
    return this.http.post(this.lUrl, newFavorite);
  }
}