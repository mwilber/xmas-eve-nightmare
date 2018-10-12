import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { LocationService } from '../services/location.service';
import { Location } from '../interfaces/location'
import { DialogService } from '../services/dialog.service';
import { FluxDialogComponent } from './flux-dialog/flux-dialog.component';

@Component({
  selector: 'flux-interface',
  templateUrl: './flux-interface.component.html',
  styleUrls: ['./flux-interface.component.css']
})
export class FluxInterfaceComponent implements OnInit {

  @ViewChild(FluxDialogComponent)
    private dialogComponant: FluxDialogComponent;
  
  currentScene: { location: any, conversations: any[] };

  constructor(
      private userService: UserService, 
      private locationService: LocationService, 
      private dialogService: DialogService) {

    this.currentScene = {
      location: null,
      conversations: []
    }
    
    this.LoadScene(userService.GetLocation());
    
  }

  ngOnInit() {
    //console.log(this.currentLocation);
  }

  _resetScene(){
    this.currentScene = {
      location: <Location>{},
      conversations: []
    }
  }

  public LoadScene(alias){
    this._resetScene();
    this.userService.SetLocation(alias);
    this.currentScene.location = this.locationService.GetLocation(this.userService.GetLocation());

    // Build the dialog tree
    this.currentScene.conversations = this.dialogService.GetActiveDialogForUserState(this.userService.GetUserState());
    // if(this.dialogComponant){
    //   this.dialogComponant.Refresh();
    // }

    console.log('currentScene', this.currentScene);
  }

}
