import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

export interface Poke{
  id: number,
  nombre: string,
  tipo1: string,
  tipo2: string,
  porcentaje: number,
  img: string
}

const POKE_KEYS='my-pokes';


@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor(private storage: Storage) { }


  addPokemon(poke: Poke): Promise<any> {
    return this.storage.get(POKE_KEYS).then((pokes: Poke[])=>{
      if(pokes){
        pokes.push(poke);
        return this.storage.set(POKE_KEYS,pokes);
      }else{
        return this.storage.set(POKE_KEYS,[poke]);
      }

    });
  }

  getPokes(): Promise<Poke[]>{
    return this.storage.get(POKE_KEYS);
  }

  updatePokemon(poke: Poke): Promise<any>{
    return this.storage.get(POKE_KEYS).then((pokes: Poke[])=>{
      if(!pokes || pokes.length == 0){
        return null;
      }

      let nuevosPokes: Poke[] = [];

      for(let i of pokes){
        if(i.id === poke.id){
          nuevosPokes.push(poke);
        }else{
          nuevosPokes.push(i);
        }
      }
      return this.storage.set(POKE_KEYS,nuevosPokes);
    });
  }

  deletePokemon(id: number): Promise<Poke>{
    return this.storage.get(POKE_KEYS).then((pokes: Poke[])=>{
      if(!pokes || pokes.length == 0){
        return null;
      }

      let guardados: Poke[] = [];

      for(let i of pokes){
        if(i.id !== id){
          guardados.push(i);
        }
      }
      return this.storage.set(POKE_KEYS,guardados);
    });
  }
}
