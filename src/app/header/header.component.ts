import { Component } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter,pairwise} from 'rxjs/operators'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  btnInicio:any = true
  btnHeader:any = {"btnInicio" : true,"btnLogin": false,"btnContacto": false }

  constructor(private router: Router){
           
    router.events.subscribe((val) => {
      
        if (val instanceof NavigationEnd) {
            // val.url = url que cambio    
            switch (val.url) {
              case '/bienvenido':
                this.CambiarEstadoBotones('btnInicio'); 
                break;
              case '/login':
                this.CambiarEstadoBotones('btnLogin'); 
                break;            
              default:
                this.DesactivarEstadoBotones();
                break;
            }        
                           
        }       
    });
  }

  BtnNavsetClicked(keyJson:string, redireccion:string){
    
   this.CambiarEstadoBotones(keyJson);

    this.router.navigate(['/'+ redireccion]);
    
  }

  CambiarEstadoBotones(keyJson:any){
    Object.keys(this.btnHeader).forEach((key) =>{
      
      if(key == keyJson){
        this.btnHeader[key] = true
      }
      else{
        this.btnHeader[key] = false
      }
      
    });
  }

  DesactivarEstadoBotones(){
    Object.keys(this.btnHeader).forEach((key) =>{
        this.btnHeader[key] = false
    });
  }

}
