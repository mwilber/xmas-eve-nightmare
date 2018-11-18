import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dialog } from 'src/app/flux-engine/interfaces/dialog';

@Component({
  selector: 'flux-edit-dialog',
  templateUrl: './flux-edit-dialog.component.html',
  styleUrls: ['./flux-edit-dialog.component.css']
})
export class FluxEditDialogComponent implements OnInit {

  @Input() dialog: Dialog;

  @Output() changed = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ReportDirty(){
    this.changed.emit('dirty');
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
    this.ReportDirty();
  }

}
