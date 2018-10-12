import { Injectable } from '@angular/core';
import { UserState } from '../interfaces/user-state';

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
  
  public GetUserState(): UserState {
    return {
      location: this.location,
      prestige: this.prestige,
      keys: this.keys.slice()
    }
  }

  public GetLocation(){
    return this.location;
  }
  public SetLocation(alias){
    this.location = alias;
  }
}
