import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { UserState } from '../interfaces/user-state';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  //dialogTree: {};
  characters: {};
  storyScript: {};

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

    this.storyScript = {
      room1: [
        {
          id: 'room1_n_bkg',
          character: '',
          location: 'room1',
          enable: [],
          dialog: {
            id: '001_001',
            label: '',
            content: 'You are in a dark and stormy room.',
            children: []
          }
        },
        {
          id: 'room1_mike_intro',
          character: 'mike',
          location: 'room1',
          enable: [],
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
      ],
      room2: [
        {
          id: 'room2_n_bkg',
          character: '',
          location: 'room2',
          enable: [],
          dialog: {
            id: '001_001',
            label: '',
            content: 'You are in a less stormy, and quasi-dark room.',
            children: []
          }
        }
      ]
    };


    // this.dialogTree = {
    //   room1_n: {
    //     character: '',
    //     location: 'room1',
    //     dialogRoots: [
    //       {
    //         trigger: {},
    //         dialog: {
    //           id: '001_001',
    //           label: '',
    //           content: 'You are in a dark and stormy room.',
    //           children: []
    //         }
    //       }
    //     ]
    //   },
    //   room1_mike_intro: {
    //     character: 'mike',
    //     location: 'room1',
    //     dialog: {
    //       id: '001_001',
    //       label: '',
    //       content: 'Hi. I\'m mike. This is my brother Kevin. And this is my other brother bill',
    //       children: [{
    //         id: '002_001',
    //         label: 'I love you all.',
    //         content: 'We too are fond of you',
    //         children: []
    //       },
    //       {
    //         id: '002_002',
    //         label: 'I don\'t like you.',
    //         content: 'We are ashamed.',
    //         children: []
    //       }]
    //     }
    //   },
    //   room2_n: {
    //     character: '',
    //     location: 'room2',
    //     dialog: {
    //       id: '001_001',
    //       label: '',
    //       content: 'You are in a less stormy, and quasi-dark room.',
    //       children: []
    //     }
    //   }

    // }/* dialog tree */

  }

  GetActiveDialogForUserState(userState: UserState): any {

    let dialogs = {};

    console.log('userState', userState);
    for( let interaction of this.storyScript[userState.location]){
      if( interaction.character ){
        dialogs[interaction.character] = interaction.dialog;
        
      }else{
        dialogs['narrator'] = interaction.dialog;
      }
    }

    return dialogs;

  }

  // GetActiveDialogByAliasList(aliases: string[]){
  //   let dialogs = [];

  //   for( let alias of aliases ){
  //     if( this.dialogTree.hasOwnProperty(alias) ){
  //       dialogs.push( this.dialogTree[alias] );
  //     }
  //   }

  //   return dialogs;
  // }

  // GetDialog(alias: string): {}{
  //   if( this.dialogTree.hasOwnProperty(alias) ){
  //     return this.dialogTree[alias];
  //   }
  //   return null;
  // }
  
  GetCharacter(alias: string): Character{
    if( this.characters.hasOwnProperty(alias) ){
      return this.characters[alias];
    }
  }

  
}
