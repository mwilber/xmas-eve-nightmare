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

}
