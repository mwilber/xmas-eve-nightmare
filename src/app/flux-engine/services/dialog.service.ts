import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogTree: {};
  characters: {};

  constructor() {

    this.characters = {
      mike: {
        alias: 'mike',
        label: 'Michael J. Nelson'
      },
      kevin: {
        alias: 'kevin',
        label: 'Kevin Murphy'
      },
      bill: {
        alias: 'bill',
        label: 'William Combett III'
      }
    };

    this.dialogTree = {
      room1_n: {
        character: '',
        dialog: {
          id: '001_001',
          label: '',
          content: 'You are in a dark and stormy room.',
          children: []
        }
      },
      room1_mike_intro: {
        character: 'mike',
        dialog: {
          id: '001_001',
          label: '',
          content: 'Hi. I\'m mike. This is my brother Kevin. And this is my other brother bill',
          children: [{
            id: '002_001',
            label: 'I love you all.',
            content: 'We too are fond of you',
            children: []
          },
          {
            id: '002_002',
            label: 'I don\'t like you.',
            content: 'We are ashamed.',
            children: []
          }]
        }
      },
      room2_n: {
        character: '',
        dialog: {
          id: '001_001',
          label: '',
          content: 'You are in a less stormy, and quasi-dark room.',
          children: []
        }
      }

    }/* dialog tree */

  }

  GetDialog(alias: string): {}{
    if( this.dialogTree.hasOwnProperty(alias) ){
      return this.dialogTree[alias];
    }
    return null;
  }
  
  GetCharacter(alias: string): Character{
    if( this.characters.hasOwnProperty(alias) ){
      return this.characters[alias];
    }
  }

  
}
