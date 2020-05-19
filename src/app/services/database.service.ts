import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';


export interface Pokemon{
  id: number,
  name: string,
  tipo1: string,
  tipo2: string,
  porcentaje: number,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  pokemons = new BehaviorSubject([]);

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient){ 
    this.plt.ready().then(() => {
      this.sqlite.create({
        name:'pokemonwiki.db',location:'default'
      })
      .then((db: SQLiteObject) => {
        this.database = db;
        this.crearDatabase();
      });
    });
  }

  crearDatabase(){
    this.http.get('assets/bd.sql',{responseType: 'text'})
    .subscribe(sql=>{
      this.sqlitePorter.importSqlToDb(this.database,sql)
        .then(_=>{
          this.loadPokemons();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }

  getDatabaseState(){
    return this.dbReady.asObservable();
  }

  getPokemons(): Observable<Pokemon[]>{
    return this.pokemons.asObservable();
  }

  loadPokemons(){
    return this.database.executeSql('SELECT * FROM pokemon',[]).then(data => {
      let pokemons: Pokemon[] = [];

      if(data.rows.length > 0){
        for(var i = 0; i < data.rows.length;i++){
          pokemons.push({
            id: data.rows.item(i).idPoke,
            name: data.rows.item(i).nombre,
            tipo1: data.rows.item(i).tipo1,
            tipo2: data.rows.item(i).tipo2,
            porcentaje: data.rows.item(i).usePercent,
            img: data.rows.item(i).img
          });
        }
      }
      this.pokemons.next(pokemons);
    });
  }

  addPokemon(name,tipo1,tipo2,porcentaje,img){
    let data = [name,tipo1,tipo2,porcentaje,img];

    return this.database.executeSql('INSERT INTO pokemon (nombre,tipo1,tipo2,usePercent,img) VALUES (?,?,?,?,?)',data).then(data => {
      this.loadPokemons();
    });
  }

  getPokemon(id): Promise<Pokemon>{
    return this.database.executeSql('SELECT * FROM pokemon WHERE nombre = ?',[id]).then(data => {
      return {
        id: data.rows.item(0).idPoke,
        name: data.rows.item(0).nombre,
        tipo1: data.rows.item(0).tipo1,
        tipo2: data.rows.item(0).tipo2,
        porcentaje: data.rows.item(0).usePercent,
        img: data.rows.item(0).img
      }
    });
  }

  deletePokemon(id){
    return this.database.executeSql('DELETE FROM pokemon WHERE nombre = ?',[id]).then(_ => {
      this.loadPokemons();
    });
  }

  updatePokemon(poke: Pokemon){
    let data = [poke.name,poke.tipo1,poke.tipo2,poke.porcentaje,poke.img];
    return this.database.executeSql('UPDATE pokemon SET nombre = ?, tipo1 = ?, tipo2 = ?, usePercent = ?, img = ? WHERE idPoke = ${poke.id}',[data]).then(_ => {
      this.loadPokemons();
    });
  }



}
