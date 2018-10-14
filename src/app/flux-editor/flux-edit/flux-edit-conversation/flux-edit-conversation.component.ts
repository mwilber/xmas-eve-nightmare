import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'src/app/flux-engine/services/dialog.service';

@Component({
  selector: 'app-flux-edit-conversation',
  templateUrl: './flux-edit-conversation.component.html',
  styleUrls: ['./flux-edit-conversation.component.css']
})
export class FluxEditConversationComponent implements OnInit {

  @Input() conversation;

  constructor(
    private dialogService: DialogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.route.snapshot.params['conversation']){
      this.conversation = this.dialogService.GetConversation(this.route.snapshot.params['conversation']);
    }
    //this.conversations = this.dialogService.GetAllDialogForLocation(this.location.alias);
  }

  AddTrigger(conversation){
    if(!Array.isArray(conversation.triggers)){
      conversation.triggers = [];
    }
    conversation.triggers.push("");
  }

}
