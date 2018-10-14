import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from 'src/app/flux-engine/services/dialog.service';
import { Location } from 'src/app/flux-engine/interfaces/location';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from 'src/app/flux-engine/services/location.service';

@Component({
  selector: 'flux-edit-location',
  templateUrl: './flux-edit-location.component.html',
  styleUrls: ['./flux-edit-location.component.css']
})
export class FluxEditLocationComponent implements OnInit {

  @Input() location: Location;
  conversations;

  constructor(
    private locationService: LocationService,
    private dialogService: DialogService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    if(this.route.snapshot.params['location']){
      this.location = this.locationService.GetLocation(this.route.snapshot.params['location']);
    }
    this.conversations = this.dialogService.GetAllDialogForLocation(this.location.alias);
  }

  AddDialogTree(){
    this.conversations.push(
      {
        id: '',
        character: '',
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
  }

  AddTrigger(conversation){
    if(!Array.isArray(conversation.triggers)){
      conversation.triggers = [];
    }
    conversation.triggers.push("");
  }

}
