import { Component, OnInit } from '@angular/core';
import { DatabaseService, Pokemon } from 'src/app/services/database.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {

  pokemons: Pokemon[] = [];

  pokemon = {};

  constructor(private db: DatabaseService){

  }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(ready => {
      if(ready){
        this.db.getPokemons().subscribe( pokes => {
          console.log('Pokes cambiados: ',pokes);
          this.pokemons = pokes;
        });
      }
    })
  }

  addPokemon(){
    this.db.addPokemon(this.pokemon['name'],this.pokemon['tipo1'], this.pokemon['tipo2'], this.pokemon['porcentaje'], this.pokemon['img'])
    .then(_ =>{
      this.pokemon = {};
    });
  }

}
