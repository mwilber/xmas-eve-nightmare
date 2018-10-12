import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'flux-dialog',
  templateUrl: './flux-dialog.component.html',
  styleUrls: ['./flux-dialog.component.css']
})
export class FluxDialogComponent implements OnInit {

  @Input() dialog;

  constructor() {
    
  }

  ngOnInit() {
    if(typeof this.dialog === 'undefined'){
      this.dialog = {};
    }
  }

}
