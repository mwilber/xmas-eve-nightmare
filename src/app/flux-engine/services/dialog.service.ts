import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Character } from '../interfaces/character';
import { UserState } from '../interfaces/user-state';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  httpOptions: {};

  //dialogTree: {};
  characters: Character[];
  storyScript: {};

  constructor(private http:HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };

    this.characters = null;
    this.storyScript = null;

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
    return this.http.put(environment.firebaseUrl+'storyscript.json', this.storyScript, this.httpOptions);
  }
  _putCharacters(){
    return this.http.put(environment.firebaseUrl+'characters.json', this.characters, this.httpOptions);
  }
  _getStoryScript() {
    return this.http.get<Location[]>(environment.firebaseUrl+'storyscript.json');
  }
  _getCharacters() {
    return this.http.get<Character[]>(environment.firebaseUrl+'characters.json');
  }

  SaveToFirebase(){
    this._putStoryScript().subscribe(result => {console.log('Store story script complete', result)});
    this._putCharacters().subscribe(result => {console.log('Store characters complete', result)});
  }
  LoadFromFirebase(){
    this._getStoryScript().subscribe(result =>{
      console.log('load story script complete', result);
      if( result ){
        this.storyScript = result;
      }else{
        this.storyScript = {};
      }
    });
    this._getCharacters().subscribe(result =>{
      console.log('load characters complete', result);
      if( result ){
        this.characters = result;
      }else{
        this.characters = [];
      }
    });
  }

  GetActiveDialogForUserState(userState: UserState): any {

    let dialogs = {};

    console.log('userState', userState);
    if( this.storyScript ){
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
    }

    return dialogs;

  }

  GetAllDialogForLocation(roomAlias: string){
    // Inject an empty room reference if none exists
    if(!this.storyScript.hasOwnProperty(roomAlias)){
      this.storyScript[roomAlias] = [];
    }
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

  GetCharacters(){
    return this.characters;
  }

  
}
