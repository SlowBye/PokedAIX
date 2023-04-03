import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.page.html',
  styleUrls: ['./pokemon-modal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PokemonModalPage implements OnInit {
  data: any;

  constructor(public modalController: ModalController) {
    
  }

  ngOnInit() {
;
  }
  
  dismissModal() {
    this.modalController.dismiss();
  }
  
}
