import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  private loggedIn = false;

  login(login: string, password: string){
    if( !this.isAuthenticated && (login === 'karthi' && password === 'siva')){
      return this.loggedIn = true;
    }else{
      return this.loggedIn = false;
    }
  }

  logout(){
    this.loggedIn = false;
  }
  
  isAuthenticated(){
    return this.loggedIn;
  }

}
