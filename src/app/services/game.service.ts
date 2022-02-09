import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private firestore : Firestore) { }

  addGame(game: Game) {
    const gamesRef = collection(this.firestore, 'videoGames'); 
    return addDoc(gamesRef, game);
  }
  
  getGames(): Observable<Game[]> {
    const gamesRef = collection(this.firestore, 'videoGames');
    return collectionData(gamesRef, { idField: 'id' }) as Observable<Game[]>;
  }
}
