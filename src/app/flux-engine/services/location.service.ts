import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '../interfaces/location';
import {environment} from '../../../environments/environment';
import { LocalStorage } from 'ngx-store';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  httpOptions: {};
  @LocalStorage() locations: Location[];

  constructor(private http:HttpClient, private authService: AuthService) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };

    this.locations = null;

    console.log('Location Service', this.locations);
  }

  _putLocations(token){
    return this.http.put(environment.firebaseUrl+'locations.json?auth='+token, this.locations, this.httpOptions);
  }
  _getLocations() {
    return this.http.get<Location[]>(environment.firebaseUrl+'locations.json');
  }

  IsDataLoaded(): boolean{
    if(this.locations){
      return true;
    }else{
      return false;
    }
  }

  SaveToFirebase(){
    const token = this.authService.GetToken();
    this._putLocations(token).subscribe(result => {console.log('Store locations complete', result)});
  }

  LoadFromFirebase(){
    this._getLocations().subscribe(result =>{
      console.log('load locations complete', result);
      this.locations = result;
    })
  }

  LoadFromFirebaseAsync(){
    return new Promise((resolve, reject)=>{
      this._getLocations().subscribe(result =>{
        this.locations = result;
        resolve();
      });
    });
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
      return this.locations.find(location => location.alias === alias );
    }
    return null;
  }
}
