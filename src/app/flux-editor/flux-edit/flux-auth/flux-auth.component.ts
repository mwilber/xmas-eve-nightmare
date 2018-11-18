import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/flux-engine/services/auth.service';

@Component({
  selector: 'app-flux-auth',
  templateUrl: './flux-auth.component.html',
  styleUrls: ['./flux-auth.component.css']
})
export class FluxAuthComponent implements OnInit {

  constructor(private authService: AuthService,
    public dialogRef: MatDialogRef<FluxAuthComponent>
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  OnSignin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;

    this.authService.SigninUser(email, password);
  }

}
