import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '../interfaces/location';
import {environment} from '../../../environments/environment';
import { LocalStorage } from 'ngx-store';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  httpOptions: {};
  @LocalStorage() locations: Location[];

  constructor(private http:HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };

    this.locations = null;

    console.log('Location Service', this.locations);
  }

  _putLocations(){
    return this.http.put(environment.firebaseUrl+'locations.json', this.locations, this.httpOptions);
  }
  _getLocations() {
    return this.http.get<Location[]>(environment.firebaseUrl+'locations.json');
  }

  SaveToFirebase(){
    this._putLocations().subscribe(result => {console.log('Store locations complete', result)});
  }

  LoadFromFirebase(){
    this._getLocations().subscribe(result =>{
      console.log('load locations complete', result);
      this.locations = result;
    })
  }

  public GetLocations(): Location[]{
    return this.locations;
  }

  public GetAllLocationAlias(): string[]{
    let locationAliases = this.locations.map((location)=>{return location.alias});
    return locationAliases;
  }

  public GetLocation(alias: string): Location{
    if( this.locations ){
      for( let location of this.locations ){
        if( location.alias === alias ){
          return location;
        }
      }
    }
    return null;
  }
}
