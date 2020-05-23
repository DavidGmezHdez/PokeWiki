import { Injectable } from '@angular/core';
import { Poke } from '../services/storage.service';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage'
import { Platform } from '@ionic/angular';


const USER_KEY = 'my-users';

export interface Usuario{
  id: number,
  nick: string,
  email: string,
  pass: string,
  pokes: Poke[],
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  usuarioActivo: Usuario;
  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage) {

  }

  addUsuario(usu: Usuario){

    return this.storage.get(USER_KEY).then((usus: Usuario[])=>{
      if(usus){
        usus.push(usu);
        return this.storage.set(USER_KEY,usus);
      }else{
        return this.storage.set(USER_KEY,[usu]);
      }

    });
  }

  getUsuarios(){
    return this.storage.get(USER_KEY);
  }

  setUsuarioActivo(usuario: Usuario){
    this.usuarioActivo = usuario;
  }

  getUsuarioActivo(){
    return this.usuarioActivo;
  }

  setEstado(estado:boolean){
    this.authenticationState.next(estado);
  }

/*
  deleteUsuario(id: number){
    return this.storage.get(TOKEN_KEY).then((usus: Usuario[])=>{
      if(!usus || usus.length == 0){
        return null;
      }

      let guardados: Usuario[] = [];

      for(let i of usus){
        if(i.id !== id){
          guardados.push(i);
        }
      }
      return this.storage.set(TOKEN_KEY,guardados);
    });
  }


  login(usu: Usuario){
    if(this.checkLogin(usu)){
      this.authenticationState.next(true);
      this.usuarioActivo = usu;
      console.log("Inicio de sesion correcto");
      return true;
    }
    else{
      console.log("Inicio de sesion incorrecto");
      return false;
    }
  }

*/
  logout(){
    this.usuarioActivo = undefined;
    this.authenticationState.next(false);
  }

  isAuthenticated(){
    return this.authenticationState.value;
  }
/*
  checkToken(){
    return this.storage.get(TOKEN_KEY).then(res =>{
      if(res){
        this.authenticationState.next(true);
      }
    });
  }

  checkLogin(usu: Usuario){
    console.log(usu);
    console.log(this.usus);
    if(!this.usus || this.usus.length == 0){
      return false;
    }

    for(let i of this.usus){
      if(i.email === usu.email){
        if(i.pass === usu.pass){
          return true;
        }
      }
    }
    return false;
  }



  getPokemonUsuario(){
    return this.storage.get(TOKEN_KEY).then(() =>{
      return this.usuarioActivo.pokes;
    })
  }

  getUsuarioActivo(){
    return this.usuarioActivo;
  }*/

}
