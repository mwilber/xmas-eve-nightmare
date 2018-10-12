import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  keys: string[];
  prestige: number;
  location: string;

  constructor() { }
}
