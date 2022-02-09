import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  game: Game = {name: '', image: '', description: ''};

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.gameService.addNewGame(form.value).
      then(() => form.reset());

  }
}
