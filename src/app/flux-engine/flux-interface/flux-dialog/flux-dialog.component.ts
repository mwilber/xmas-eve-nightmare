import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { Dialog } from '../../interfaces/dialog';

@Component({
  selector: 'flux-dialog',
  templateUrl: './flux-dialog.component.html',
  styleUrls: ['./flux-dialog.component.css']
})
export class FluxDialogComponent implements OnInit {

  @Input() conversations;
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
    // Get active dialog
    this.activeDialog = this.conversations[this.selectedCharacter];
  }

  SetActiveCharacter(alias: string){
    this.selectedCharacter = alias;
    this.RefreshDialog();
  }

}
