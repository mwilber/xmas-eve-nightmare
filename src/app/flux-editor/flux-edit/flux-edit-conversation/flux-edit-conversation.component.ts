import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'src/app/flux-engine/services/dialog.service';
import { Character } from 'src/app/flux-engine/interfaces/character';
import { LocalStorage } from 'ngx-store';
import {Location as RouterLocation} from '@angular/common';

@Component({
  selector: 'app-flux-edit-conversation',
  templateUrl: './flux-edit-conversation.component.html',
  styleUrls: ['./flux-edit-conversation.component.css']
})
export class FluxEditConversationComponent implements OnInit {

  @LocalStorage() storyScript;
  conversation;
  characters: Character[];

  constructor(
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private _location: RouterLocation
  ) {
    this.characters = dialogService.GetCharacters();
  }

  ngOnInit() {
    if(this.route.snapshot.params['conversation']){
      //this.conversation = this.dialogService.GetConversation(this.route.snapshot.params['conversation']);
      const locations = Object.keys(this.storyScript);
      for(let location of locations){
        console.log('searching location', location);
        for(let conversation of this.storyScript[location]){
          if(conversation.id === this.route.snapshot.params['conversation']){
            this.conversation = conversation;
            //debugger;
          }
        }
      }
    }
  }

  NavBack() {
    this._location.back();
  }

  AddTrigger(conversation){
    if(!Array.isArray(conversation.triggers)){
      conversation.triggers = [];
    }
    conversation.triggers.push("");
  }

  UpdateDataLocal(event){
    this.storyScript.save();
  }

  SaveData(){
    this.dialogService.SaveToFirebase();
  }

  trackByFn(index: any, item: any) {
    return index;
  }

}
