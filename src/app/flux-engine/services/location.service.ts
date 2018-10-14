import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '../interfaces/location'

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  httpOptions: {};
  locations: Location[];

  constructor(private http:HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };

    this.locations = [];

    // this.locations = [
    //   {
    //     alias: 'room1', 
    //     label: 'Room One', 
    //     scene: {
    //       dialog: [
    //         'room1_n',
    //         'room1_mike_intro'
    //       ]
    //     },
    //     adjacentLocations: [
    //       'room2'
    //     ]
    //   },
    //   {
    //     alias: 'room2', 
    //     label: 'Room Two', 
    //     scene: {
    //       dialog: [
    //         'room2_n'
    //       ]
    //     },
    //     adjacentLocations: [
    //       'room1',
    //       'room3'
    //     ]
    //   },
    //   {
    //     alias: 'room3', 
    //     label: 'Room Three', 
    //     scene: {
    //       dialog: []
    //     },
    //     adjacentLocations: [
    //       'room2'
    //     ]
    //   }
    // ]

    console.log('Location Service', this.locations);
  }

  _putLocations(){
    return this.http.put('https://gzflux.firebaseio.com/stories/demo/locations.json', this.locations, this.httpOptions);
  }
  _getLocations() {
    return this.http.get<Location[]>('https://gzflux.firebaseio.com/stories/demo/locations.json');
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
    return this.locations.slice();
  }

  public GetLocation(alias: string): Location{
    for( let location of this.locations ){
      if( location.alias === alias ){
        return location;
      }
    }
    return null;
  }
}
