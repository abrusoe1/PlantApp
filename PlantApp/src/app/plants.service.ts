import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datum, Plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  url:string = "https://perenual.com/api/species-list?key=sk-zKUS64374955e6d69502"
  lUrl:string = "http://localhost:8080/"  //Short for local URL
  constructor(private http:HttpClient) { }

  //TODO: Change location of StudyBuddyFav to whatever is appropriate once we figure that out

  getAllPlantNames():Observable<Datum[]> {
    return this.http.get<Datum[]> (this.url);
  }

  getPlant(id:number):Observable<Datum> {
    return this.http.get<Datum>(this.url + "/"+id);
  }

  getAllPersonal():Observable<StudyBuddyFav[]> {
    return this.http.get<StudyBuddyFav[]> (this.lUrl); 
  }

  getPersonal(id:number):Observable<StudyBuddyFav> {
    return this.http.get<StudyBuddyFav>(this.lUrl + "/"+id);
  }

  deletePersonal(id:number):Observable<void> {
    console.log(id);
    return this.http.delete<void>(this.lUrl + "/" + id);
    
  }

  addToPersonal(newFavorite:StudyBuddyFav):Observable<Object> {
    return this.http.post(this.lUrl, newFavorite);
  }
}