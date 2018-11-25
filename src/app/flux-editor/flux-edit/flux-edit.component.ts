import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/flux-engine/services/location.service';
import { Location } from 'src/app/flux-engine/interfaces/location';
import { DialogService } from 'src/app/flux-engine/services/dialog.service';
import { Character } from 'src/app/flux-engine/interfaces/character';
import { LocalStorage } from 'ngx-store';
import * as firebase from 'firebase/app';
import { AuthService } from 'src/app/flux-engine/services/auth.service';
import {MatDialog} from '@angular/material';
import {FluxAuthComponent} from 'src/app/flux-editor/flux-edit/flux-auth/flux-auth.component';

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
      private dialogService: DialogService,
      private authService: AuthService,
      public dialog: MatDialog
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
    firebase.initializeApp({
      apiKey: "AIzaSyCjgUm-qJ_AITVx_oG-_xGLSj6C-u1iib0",
    authDomain: "gzflux.firebaseapp.com",
    databaseURL: "https://gzflux.firebaseio.com",
    projectId: "gzflux",
    storageBucket: "gzflux.appspot.com",
    messagingSenderId: "1066340775057"
    });
  }

  UpdateDataLocal(event){
    this.characters.save();
    this.locations.save();
  }

  SaveData(){
    
    if(this.authService.GetToken()){
      this.locationService.SaveToFirebase();
      this.dialogService.SaveToFirebase();
    }else{
      const dialogRef = this.dialog.open(FluxAuthComponent, {
        width: '250px',
        data: {}
      });
    }
    
  }

  LoadData(){
    this.locationService.LoadFromFirebase();
    this.dialogService.LoadFromFirebase();
    this.dialogService.LoadFromFirebase();
  }

  AddCharacter(){
    this.characters.push({
      alias: '',
      label: '',
      inanimate: false
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
