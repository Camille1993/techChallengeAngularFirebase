import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game!: Game;

  constructor(private route: ActivatedRoute, 
    private gameService: GameService) { }

  ngOnInit(): void {
    const routeParams =this.route.snapshot.paramMap;
    const GameIdFromRoute = String(routeParams.get('gameId'));

    this.gameService.getGameByID(GameIdFromRoute).subscribe((res: Game) => {     
      this.game = res;
    })
  }

}
