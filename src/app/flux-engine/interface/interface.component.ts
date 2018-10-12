import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { LocationService } from '../services/location.service';
import { Location } from '../models/location'

@Component({
  selector: 'flux-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  currentLocation: Location;

  constructor(userService: UserService, locationService: LocationService) {
    this.currentLocation = locationService.GetLocation(userService.GetLocation());
  }

  ngOnInit() {
    console.log(this.currentLocation);
  }

}
