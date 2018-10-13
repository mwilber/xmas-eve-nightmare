import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { Dialog } from '../../interfaces/dialog';

@Component({
  selector: 'flux-dialog',
  templateUrl: './flux-dialog.component.html',
  styleUrls: ['./flux-dialog.component.css']
})
export class FluxDialogComponent implements OnInit {

  @Input() conversations;
  @Output() conversationExit = new EventEmitter();
  selectedCharacter: string;
  activeDialog: Dialog;
  availableCharacters: string[];

  constructor() {
    this.selectedCharacter = '';
    this.activeDialog = null;
  }

  ngOnInit() {
    
  }

  ngOnChanges(){
    console.log('NG ON CHANGES');
    this.selectedCharacter = 'narrator';
    this.RefreshDialog();
    this.RefreshCharacters();
  }

  ReloadDialog(actions){
    this.SetActiveCharacter('narrator');
    // TODO: Trigger a tree reload
    this.conversationExit.emit(actions);
  }

  RefreshCharacters(){
    this.availableCharacters = [];
    let characterProps = Object.keys(this.conversations);
    for (let prop of characterProps) { 
      if(this.conversations.hasOwnProperty(prop)){
        this.availableCharacters.push(prop);
      }
    }
  }

  RefreshDialog(){
    this.activeDialog = <Dialog>{};
    // Get active dialog
    if(this.conversations.hasOwnProperty(this.selectedCharacter)){
      this.activeDialog = this.conversations[this.selectedCharacter];
    }
  }

  SetDialogNode(node: Dialog){
    this.activeDialog = node;
  }

  SetActiveCharacter(alias: string){
    this.selectedCharacter = alias;
    this.RefreshDialog();
  }

}
