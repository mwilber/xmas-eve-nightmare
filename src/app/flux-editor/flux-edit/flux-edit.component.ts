import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/flux-engine/services/location.service';
import { Location } from 'src/app/flux-engine/interfaces/location';
import { DialogService } from 'src/app/flux-engine/services/dialog.service';

@Component({
  selector: 'flux-edit',
  templateUrl: './flux-edit.component.html',
  styleUrls: ['./flux-edit.component.css']
})
export class FluxEditComponent implements OnInit {

  locations: Location[];

  constructor(
      private locationService: LocationService,
      private dialogService: DialogService
  ) {
    this.locations = locationService.GetLocations();
  }

  ngOnInit() {
  }

  SaveData(){
    this.locationService.SaveToFirebase();
    this.dialogService.SaveToFirebase();
  }

  LoadData(){
    this.locationService.LoadFromFirebase();
  }

}
