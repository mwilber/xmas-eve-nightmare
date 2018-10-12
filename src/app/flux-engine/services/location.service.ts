import { Injectable } from '@angular/core';
import { Location } from '../models/location'

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locations: Location[];

  constructor() {

    this.locations = [
      {
        alias: 'room1', 
        label: 'Room One', 
        adjacentLocations: [
          'room2'
        ]
      },
      {
        alias: 'room2', 
        label: 'Room Two', 
        adjacentLocations: [
          'room1',
          'room3'
        ]
      },
      {
        alias: 'room3', 
        label: 'Room Three', 
        adjacentLocations: [
          'room2'
        ]
      }
    ]

    console.log('Location Service', this.locations);
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
