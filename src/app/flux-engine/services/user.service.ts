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

  public ProcessAction(action: {name: string, prop: any}){
    switch(action.name){
      case 'key':
        this.keys.push(action.prop);
        break;
      case 'prestige':
        this.prestige += +action.prop;
      case 'teleport':
        this.SetLocation(action.prop);
      default:
        break;
    }
    console.log('UserState',this.GetUserState());
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
