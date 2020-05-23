import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { BehaviorSubject } from 'rxjs';


export interface Usuario{
  id: number,
  email: string,
  nick: string,
  pass: string
}

const USU_KEY='auth-token';

@Injectable({
  providedIn: 'root'
})
export class StorageUsuariosService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage) { }



  addUsuario(usu: Usuario){
    return this.storage.get(USU_KEY).then((usus: Usuario[])=>{
      if(usus){
        usus.push(usu);
        return this.storage.set(USU_KEY,usus);
      }else{
        return this.storage.set(USU_KEY,[usu]);
      }

    });
  }

  getUsuarios(){
    return this.storage.get(USU_KEY);
  }

  deleteUsuario(id: number){
    return this.storage.get(USU_KEY).then((usus: Usuario[])=>{
      if(!usus || usus.length == 0){
        return null;
      }

      let guardados: Usuario[] = [];

      for(let i of usus){
        if(i.id !== id){
          guardados.push(i);
        }
      }
      return this.storage.set(USU_KEY,guardados);
    });
  }


  login(usu: Usuario){
    let datos = String(usu.nick +  ' ' + usu.pass);
    return this.storage.set(USU_KEY,datos).then(res=>{
      if(this.checkLogin(usu)){
        this.authenticationState.next(true);
      }
    });
  }


  logout(usu: Usuario){
    let datos = String(usu.nick +  ' ' + usu.pass);
    return this.storage.remove(USU_KEY).then(() =>{
      this.authenticationState.next(false);
    });
  }

  isAuthenticated(){
    return this.authenticationState.value;
  }

  checkToken(){
    return this.storage.get(USU_KEY).then(res =>{
      if(res){
        
        this.authenticationState.next(true);
      }
    });
  }

  checkLogin(usu: Usuario){
    return this.storage.get(USU_KEY).then((usus: Usuario[])=>{
      if(!usus || usus.length == 0){
        return null;
      }

      for(let i of usus){
        if(i.nick === usu.nick){
          if(i.pass === usu.pass){
            return true;
          }
        }
      }
      return false;
    });
  }

}
