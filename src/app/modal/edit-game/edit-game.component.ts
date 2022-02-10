import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  @Input() id!: string;
  game! : Game;

  constructor(
    private gameService : GameService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if (this.id)
    this.gameService.getGameByID(this.id).subscribe(res => {
      this.game= res;
    });
  }

  onUpdate() {
    this.gameService.updateGame(this.game).then(() => {
      this.activeModal.close();
      console.log('Data successfully updated');
    })
  }

}
