import { Component, OnInit } from '@angular/core';
import { Pokemon, DatabaseService } from 'src/app/services/database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private db: DatabaseService, private router: Router, private toast: ToastController) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      let pokeID = params.get('id');

      this.db.getPokemon(pokeID).then(data =>{
        this.pokemon = data;
      });
    });
  }

  delete(){
    this.db.deletePokemon(this.pokemon.id).then(() => {
      this.router.navigateByUrl('/');
    });
  }

  updatePokemon(){
    this.db.updatePokemon(this.pokemon).then(async(res) =>{
      let toast = await this.toast.create({
        message: 'Pokemon actualizado',duration: 3000
      });
      toast.present();
    });
  }

}
