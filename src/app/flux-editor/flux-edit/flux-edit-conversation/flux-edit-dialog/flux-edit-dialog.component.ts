import { Component, OnInit, Input } from '@angular/core';
import { Dialog } from 'src/app/flux-engine/interfaces/dialog';

@Component({
  selector: 'flux-edit-dialog',
  templateUrl: './flux-edit-dialog.component.html',
  styleUrls: ['./flux-edit-dialog.component.css']
})
export class FluxEditDialogComponent implements OnInit {

  @Input() dialog: Dialog;

  constructor() { }

  ngOnInit() {
  }

  AddAction(){
    if(!Array.isArray(this.dialog.actions)){
      this.dialog.actions = [];
    }
    this.dialog.actions.push(
      {
        prop: '',
        value: ''
      }
    );
  }

  AddChildDialog(){
    if(!Array.isArray(this.dialog.children)){
      this.dialog.children = [];
    }
    this.dialog.children.push(
      <Dialog>{
        id: '',
        label: '',
        content: '',
        actions: null,
        children: null
      }
    );
    console.log('child added', this.dialog);
  }

}
