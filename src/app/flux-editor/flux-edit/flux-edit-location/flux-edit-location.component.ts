import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from 'src/app/flux-engine/services/dialog.service';
import { Location } from 'src/app/flux-engine/interfaces/location';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from 'src/app/flux-engine/services/location.service';
import { Dialog } from 'src/app/flux-engine/interfaces/dialog';
import { LocalStorage } from 'ngx-store';

@Component({
  selector: 'flux-edit-location',
  templateUrl: './flux-edit-location.component.html',
  styleUrls: ['./flux-edit-location.component.css']
})
export class FluxEditLocationComponent implements OnInit {

  @LocalStorage() locations;
  location: Location;
  locationAliases: string[];
  conversations;
  characters;
  newCharacter;
  newLabel;
  newAdjacentLocation;

  constructor(
    private locationService: LocationService,
    private dialogService: DialogService,
    private route: ActivatedRoute
  ) {
    this.characters = dialogService.GetCharacters();
    this.locationAliases = locationService.GetAllLocationAlias();
  }

  ngOnInit() {
    if(this.route.snapshot.params['location']){
      //this.location = this.locationService.GetLocation(this.route.snapshot.params['location']);
      this.location = this.locations.find((location)=>{
        if(location.alias === this.route.snapshot.params['location']){
          return location;
        }
      })
    }
    this.conversations = this.dialogService.GetAllDialogForLocation(this.location.alias);
  }

  UpdateDataLocal(event){
    this.locations.save();
  }

  AddAdjacentLocation(){
    // Set up the array of it loads in as null
    if(!this.location.adjacentLocations){
      this.location.adjacentLocations = [];
    }
    if(this.newAdjacentLocation){
      this.location.adjacentLocations.push(this.newAdjacentLocation);
    }
    this.UpdateDataLocal(null);
  }

  AddDialogTree(){
    //debugger;
    this.conversations.push(
      {
        id: this.location.alias+'_'+(this.newCharacter || 'n')+'_'+(this.newLabel || ''),
        character: (this.newCharacter || ''),
        location: '',
        triggers: null,
        dialog: {
          id: '',
          label: '',
          content: '',
          actions: null,
          children: []
        }
      }
    );
    this.UpdateDataLocal(null);
  }

  GetConversationActions(conversation){
    let result = '';

    result += this.GetDialogActions(conversation.dialog);

    return result;
  }

  GetDialogActions(dialog: Dialog){
    let result = '';
    if(Array.isArray(dialog.actions)){
      for( let action of dialog.actions){
        if(result !== '') result += ', '
        result += action.prop;
      }
      
    }
    if(Array.isArray(dialog.children)){
      for(let dialogb of dialog.children){
        result += this.GetDialogActions(dialogb);
        if(result !== '') result += ', '
      }
    }
    return result;
  }

  SaveData(){
    this.dialogService.SaveToFirebase();
    this.locationService.SaveToFirebase();
  }

}
