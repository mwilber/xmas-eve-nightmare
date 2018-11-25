import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/flux-engine/services/user.service';
import { LocationService } from 'src/app/flux-engine/services/location.service';
import { Location } from 'src/app/flux-engine/interfaces/location'
import { DialogService } from 'src/app/flux-engine/services/dialog.service';
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

  locationLoaded = false;
  charactersLoaded = false;
  storyscriptLoaded = false;

  constructor(
      private userService: UserService, 
      private locationService: LocationService, 
      private dialogService: DialogService) {

    this.currentScene = {
      location: null,
      conversations: []
    }
    
  }

  ngOnInit() {
    //console.log('[ngInit]', this.locations)
    //console.log(this.currentLocation);
    if(this.locationService.IsDataLoaded()){
      this.LoadScene(this.userService.GetLocation());
    }else{
      this.LoadData();
    }
    
  }

  LoadData(){
    let promises = [];
    promises.push(this.locationService.LoadFromFirebaseAsync());
    promises.push(this.dialogService.LoadCharactersFromFirebaseAsync());
    promises.push(this.dialogService.LoadStoryFromFirebaseAsync());

    Promise.all(promises).then((result)=>{
      this.LoadScene(this.userService.GetLocation());
    });
    
  }

  _resetScene(){
    this.currentScene = {
      location: <Location>{},
      conversations: []
    }
  }

  HandleAction(actions){
    console.log('Processing Action', actions);
    if(actions){
      for( let action of actions){
        this.userService.ProcessAction(action);
      }
    }
  }

  EndConversation(){
    this.LoadScene(this.userService.GetLocation());
  }

  public LoadScene(alias){
    this._resetScene();
    this.userService.SetLocation(alias);
    this.currentScene.location = this.locationService.GetLocation(this.userService.GetLocation());
    // Build the dialog tree
    this.currentScene.conversations = this.dialogService.GetActiveDialogForUserState(this.userService.GetUserState());
    // Set initial active conversations
    let conversationKeys = Object.keys(this.currentScene.conversations);
    for(let conversationKey of conversationKeys ){
      this.currentScene.conversations[conversationKey]['active'] = {
        content: this.currentScene.conversations[conversationKey].content,
        children: this.currentScene.conversations[conversationKey].children
      };
    }
    // if(this.dialogComponant){
    //   this.dialogComponant.Refresh();
    // }

    console.log('currentScene', alias, this.currentScene);
  }

}
