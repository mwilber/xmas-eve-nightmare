import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { LocationService } from '../services/location.service';
import { Location } from '../models/location'

@Component({
  selector: 'flux-interface',
  templateUrl: './flux-interface.component.html',
  styleUrls: ['./flux-interface.component.css']
})
export class FluxInterfaceComponent implements OnInit {

  currentLocation: Location;

  constructor(private userService: UserService, private locationService: LocationService) {
    this.ChangeLocation(userService.GetLocation());
  }

  ngOnInit() {
    console.log(this.currentLocation);
  }

  public ChangeLocation(alias){
    this.userService.SetLocation(alias);
    this.currentLocation = this.locationService.GetLocation(this.userService.GetLocation());
  }

}
