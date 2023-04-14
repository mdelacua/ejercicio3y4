import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:any
  pass:any
  nuevoUser:any
  nuevaPass:any
  repitePass:any

  mostraCrear:any = false
  
  constructor(  private route: ActivatedRoute,private router: Router ){

  }
  
  InicioSesion() {
    var usuario = localStorage.getItem("usuario");
    if(usuario){
      var datoUsuario = JSON.parse(usuario) 
      if(datoUsuario.user == this.user && datoUsuario.pass == this.pass){

        this.router.navigate(['/bienvenido']);
      }
      else{
        alert("Usuario invalido")
      }
    }
    else{

      alert("Usuario invalido")
    }

  }
  CrearUsuario() {
    if(this.nuevoUser && this.nuevaPass && this.repitePass && (this.nuevaPass == this.repitePass)){
      var auxJson = {user:this.nuevoUser, pass:this.nuevaPass}
      localStorage.setItem("usuario", JSON.stringify( auxJson) );
      this.mostraCrear = false
    }
    else{
      alert("error")
    }
    //this.router.navigate(['/bienvenido']);
  }
  MostrarFormCrear(param:boolean) {
    this.mostraCrear = param
  }

}
