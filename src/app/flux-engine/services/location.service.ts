import { Injectable } from '@angular/core';
import { Location } from '../interfaces/location'

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
        scene: {
          dialog: [
            'room1_n',
            'room1_mike_intro'
          ]
        },
        adjacentLocations: [
          'room2'
        ]
      },
      {
        alias: 'room2', 
        label: 'Room Two', 
        scene: {
          dialog: [
            'room2_n'
          ]
        },
        adjacentLocations: [
          'room1',
          'room3'
        ]
      },
      {
        alias: 'room3', 
        label: 'Room Three', 
        scene: {
          dialog: []
        },
        adjacentLocations: [
          'room2'
        ]
      }
    ]

    console.log('Location Service', this.locations);
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
