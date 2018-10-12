import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  keys: string[];
  prestige: number;
  location: string;

  constructor() {
    this.keys = [];
    this.location = 'room1';
    this.prestige = 0;
  }

  GetLocation(){
    return this.location;
  }
}
