import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'src/app/flux-engine/services/dialog.service';
import { Character } from 'src/app/flux-engine/interfaces/character';

@Component({
  selector: 'app-flux-edit-conversation',
  templateUrl: './flux-edit-conversation.component.html',
  styleUrls: ['./flux-edit-conversation.component.css']
})
export class FluxEditConversationComponent implements OnInit {

  @Input() conversation;
  characters: Character[];

  constructor(
    private dialogService: DialogService,
    private route: ActivatedRoute
  ) {
    this.characters = dialogService.GetCharacters();
  }

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

  SaveData(){
    this.dialogService.SaveToFirebase();
  }

  trackByFn(index: any, item: any) {
    return index;
  }

}
