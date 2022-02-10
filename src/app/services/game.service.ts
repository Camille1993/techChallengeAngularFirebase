import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, docData, setDoc } from '@angular/fire/firestore';
import { deleteDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private firestore : Firestore) { }

  addNewGame(game: Game) {
    const gamesRef = collection(this.firestore, 'videoGames'); 
    return addDoc(gamesRef, game);
  }
  
  getGames(): Observable<Game[]> {
    const gamesRef = collection(this.firestore, 'videoGames');
    return collectionData(gamesRef, { idField: 'id' }) as Observable<Game[]>;
  }

  getGameByID(id: string) {
    const gamesRef = doc(this.firestore, `videoGames/${id}`);
    return docData(gamesRef, { idField: 'id' }) as Observable<Game>;
  }
  
  updateGame(game: Game) {
    const gameDocRef = doc(this.firestore, `videoGames/${game.id}`);
    return setDoc(gameDocRef, game);
  }
  deleteGame(game: Game) {
    const gameDocRef = doc(this.firestore, `videoGames/${game.id}`);
    return deleteDoc(gameDocRef);
  }
}
