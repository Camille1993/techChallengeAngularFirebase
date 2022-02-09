import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditGameComponent } from 'src/app/modal/edit-game/edit-game.component';

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
    private gameService: GameService,
    private modal: NgbModal) { }

  ngOnInit(): void {
    const routeParams =this.route.snapshot.paramMap;
    const GameIdFromRoute = String(routeParams.get('gameId'));

    this.gameService.getGameByID(GameIdFromRoute).subscribe((res: Game) => {     
      this.game = res;
    })
  }

  editModal(game: Game) {
    const modalRef = this.modal.open(EditGameComponent, {
      size:'xl',
      centered: true,
      windowClass: 'dark-modal'
    });
    modalRef.componentInstance.id = game.id;
  }
  deleteGame(game: Game) {
    if (confirm('Are you sure to wanting delete that game ?') === true) {
      this.gameService.deleteGame(game).then(() => console.log('delete successful !'))
    }
  }

}
