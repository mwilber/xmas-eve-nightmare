import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from 'src/app/flux-engine/services/dialog.service';
import { Location } from 'src/app/flux-engine/interfaces/location';

@Component({
  selector: 'flux-edit-location',
  templateUrl: './flux-edit-location.component.html',
  styleUrls: ['./flux-edit-location.component.css']
})
export class FluxEditLocationComponent implements OnInit {

  @Input() location: Location;
  conversations;

  constructor(
    private dialogService: DialogService
  ) {
    
  }

  ngOnInit() {
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
