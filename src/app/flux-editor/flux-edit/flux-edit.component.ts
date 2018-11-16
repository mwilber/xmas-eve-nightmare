import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/flux-engine/services/location.service';
import { Location } from 'src/app/flux-engine/interfaces/location';
import { DialogService } from 'src/app/flux-engine/services/dialog.service';
import { Character } from 'src/app/flux-engine/interfaces/character';
import { LocalStorage } from 'ngx-store';

@Component({
  selector: 'flux-edit',
  templateUrl: './flux-edit.component.html',
  styleUrls: ['./flux-edit.component.css']
})
export class FluxEditComponent implements OnInit {

  @LocalStorage() locations;
  @LocalStorage() characters;

  allowSave = false;

  constructor(
      private locationService: LocationService,
      private dialogService: DialogService
  ) {
    //this.locations = locationService.GetLocations();
    //this.characters = dialogService.GetCharacters();
    if(this.locations && this.characters){
      this.allowSave = true;
    }else{
      this.allowSave = false;
    }
  }

  ngOnInit() {
    
  }

  UpdateDataLocal(event){
    this.characters.save();
    this.locations.save();
  }

  SaveData(){
    this.locationService.SaveToFirebase();
    this.dialogService.SaveToFirebase();
  }

  LoadData(){
    this.locationService.LoadFromFirebase();
    this.dialogService.LoadFromFirebase();
    this.dialogService.LoadFromFirebase();
  }

  AddCharacter(){
    this.characters.push({
      alias: '',
      label: ''
    });
    this.UpdateDataLocal(null);
  }

  AddLocation(){
    this.locations.push({
      alias: 'new',
      label: '',
      scene: {
          dialog: []
      },
      adjacentLocations: []
    });
    this.UpdateDataLocal(null);
  }

}
