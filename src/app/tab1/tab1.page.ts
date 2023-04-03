import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { PokemonModalPage } from '../pokemon-modal/pokemon-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})
export class Tab1Page {

  data: any;
  constructor(private http: HttpClient, public modalController: ModalController) {
    this.http.get('../assets/pokeapi.json').subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  async openPokemonModal(data:any) {
    const modal = await this.modalController.create({
      component: PokemonModalPage,
      componentProps: {
        data: data
      }
    });
    return await modal.present();
  }

}
