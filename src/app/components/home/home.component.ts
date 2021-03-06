import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GameService } from 'src/app/services/game.service';
import { AddGameComponent } from 'src/app/modal/add-game/add-game.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  addNewGame() {
    this.modal.open(AddGameComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    })
  }

}
