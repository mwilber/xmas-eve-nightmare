import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Character } from '../interfaces/character';
import { UserState } from '../interfaces/user-state';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  httpOptions: {};

  //dialogTree: {};
  characters: {};
  storyScript: {};

  constructor(private http:HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };

    this.characters = {};
    this.storyScript = {};

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
          triggers: null,
          dialog: {
            id: '001_001',
            label: '',
            content: 'You are in a dark and stormy room.',
            actions: null,
            children: []
          }
        },
        {
          id: 'room1_n_bkg_2',
          character: '',
          location: 'room1',
          triggers: ['room1_mike_intro'],
          dialog: {
            id: '001_001',
            label: '',
            content: 'Ah. I see you have met the gang.',
            actions: null,
            children: []
          }
        },
        {
          id: 'room1_mike_intro',
          character: 'mike',
          location: 'room1',
          triggers: null,
          dialog: {
            id: '001_001',
            label: '',
            content: 'Hi. I\'m mike. This is my brother Kevin. And this is my other brother bill',
            actions: null,
            children: [{
              id: '002_001',
              label: 'I love you all.',
              content: 'We too are fond of you',
              actions: [
                {
                  name: 'key',
                  prop: 'room1_mike_intro'
                }
              ],
              children: []
            },
            {
              id: '002_002',
              label: 'I don\'t like you.',
              content: 'We are ashamed.',
              actions: null,
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
          triggers: null,
          dialog: {
            id: '001_001',
            label: '',
            content: 'You are in a less stormy, and quasi-dark room.',
            actions: null,
            children: []
          }
        }
      ]
    };

  }

  _validateInteraction(userState: UserState, interaction: any){
    if(!userState.keys.includes(interaction.id)){
      if(Array.isArray(interaction.triggers)){
        for(let trigger of interaction.triggers){
          if(userState.keys.includes(trigger)){
            return true;
          }
        }
      }else{
        return true;
      }
    }
    return false;
  }

  _putStoryScript(){
    return this.http.put('https://gzflux.firebaseio.com/stories/demo/storyscript.json', this.storyScript, this.httpOptions);
  }
  _putCharacters(){
    return this.http.put('https://gzflux.firebaseio.com/stories/demo/characters.json', this.characters, this.httpOptions);
  }
  _getStoryScript() {
    return this.http.get<Location[]>('https://gzflux.firebaseio.com/stories/demo/storyscript.json');
  }
  _getCharacters() {
    return this.http.get<Location[]>('https://gzflux.firebaseio.com/stories/demo/characters.json');
  }

  SaveToFirebase(){
    this._putStoryScript().subscribe(result => {console.log('Store story script complete', result)});
    this._putCharacters().subscribe(result => {console.log('Store characters complete', result)});
  }
  LoadFromFirebase(){
    this._getStoryScript().subscribe(result =>{
      console.log('load story script complete', result);
      this.storyScript = result;
    });
    this._getCharacters().subscribe(result =>{
      console.log('load characters complete', result);
      this.characters = result;
    });
  }

  GetActiveDialogForUserState(userState: UserState): any {

    let dialogs = {};

    console.log('userState', userState);
    if( this.storyScript.hasOwnProperty(userState.location) ){
      for( let interaction of this.storyScript[userState.location]){
        // Validate here
        if( this._validateInteraction(userState, interaction) ){
          if( interaction.character ){
              dialogs[interaction.character] = interaction.dialog;
          }else{
            dialogs['narrator'] = interaction.dialog;
          }
        }
      }
    }

    return dialogs;

  }

  GetAllDialogForLocation(roomAlias: string){
    return this.storyScript[roomAlias];
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

  GetConversation(alias: string): {}{

    const locations = Object.keys(this.storyScript);
    for(let location of locations){
      console.log('searching location', location);
      for(let conversation of this.storyScript[location]){
        if(conversation.id === alias){
          return conversation;
        }
      }
    }

    return null;
  }
  
  GetCharacter(alias: string): Character{
    if( this.characters.hasOwnProperty(alias) ){
      return this.characters[alias];
    }
  }

  
}
