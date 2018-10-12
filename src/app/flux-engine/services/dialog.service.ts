import { Injectable } from '@angular/core';

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
      }
    }

  }
}
