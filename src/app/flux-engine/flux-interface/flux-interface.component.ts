import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { LocationService } from '../services/location.service';
import { Location } from '../interfaces/location'
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'flux-interface',
  templateUrl: './flux-interface.component.html',
  styleUrls: ['./flux-interface.component.css']
})
export class FluxInterfaceComponent implements OnInit {

  currentLocation: Location;
  currentDialog: {};

  constructor(private userService: UserService, private locationService: LocationService, private dialogService: DialogService) {
    this.LoadScene(userService.GetLocation());

    //this.currentDialog = {content: 'test two'};
    let testDialog = this.dialogService.GetDialog('room1_n');
    
  }

  ngOnInit() {
    //console.log(this.currentLocation);
  }

  _resetScene(){
    this.currentLocation = <Location>{};
    this.currentDialog = {};
  }

  public LoadScene(alias){
    this._resetScene();
    this.userService.SetLocation(alias);
    this.currentLocation = this.locationService.GetLocation(this.userService.GetLocation());

    // Build the dialog tree
    for( let alias of this.currentLocation.scene.dialog ){
      this.currentDialog[alias] = this.dialogService.GetDialog(alias);
    }

    console.log('currentDialog', this.currentDialog);
  }

}
