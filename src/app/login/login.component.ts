import { Component, NgModule } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 

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
  btnFormulario:any = {"inciarSesion" : true,"registrarse": false }
  
  
  constructor(  private route: ActivatedRoute,private router: Router,public readonly swalTargets: SwalPortalTargets, private SweetAlert2Module:SweetAlert2Module ){

  }
  
  InicioSesion() {
    var usuario = localStorage.getItem("usuario");
    if(usuario){
      var datoUsuario = JSON.parse(usuario) 
      var loginValido =false
       datoUsuario.forEach((element: { user: any; pass: any; }) => {
        
        if(element.user == this.user && element.pass == this.pass){
          this.NotificaionInicioSesion('Usuario "'+this.user+'" valido!')
          this.router.navigate(['/inicio']);
          loginValido = true
        }
        
      });
      if(!loginValido) this.ErrorUsuario()
      
    }
    else{

     this.ErrorUsuario()
     
    
      
    }
  

  }
  ErrorUsuario(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario invalido!'
    })
  }
  NotificaionInicioSesion(mensaje:string){
    Swal.fire(
      mensaje,
      'Presione Ok para continuar!',
      'success'
    )
  }

  CrearUsuario() {
    if(this.nuevoUser && this.nuevaPass && this.repitePass && (this.nuevaPass == this.repitePass)){

      var arrayUsuarios= []
      var usuarios = localStorage.getItem("usuario")

      if(usuarios) arrayUsuarios = JSON.parse(usuarios) 

      arrayUsuarios.push({user:this.nuevoUser, pass:this.nuevaPass})
      localStorage.setItem("usuario", JSON.stringify( arrayUsuarios) );
      this.mostraCrear = false      
      this.NotificaionInicioSesion('Usuario "'+this.user+'" creado exitosamente!')
      this.MostrarFormCrear('inciarSesion')
    }
    else{
      this.ErrorUsuario()
    }
    
   
  }
  MostrarFormCrear(keyJson:string) {
    Object.keys(this.btnFormulario).forEach((key) =>{
      
      if(key == keyJson){
        this.btnFormulario[key] = true
      }
      else{
        this.btnFormulario[key] = false
      }
      
    });
  }

}
