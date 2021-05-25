import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/clases/Usuario';
import { UsuariosService } from '../../servicios/usuarios.service'

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {

  usuario = null;
  id: number;

  constructor(private activatedRoute : ActivatedRoute,
              private usuariosService: UsuariosService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( prm => {
      // Recuperamos el id
      console.log(`El id es: ${prm['id']}`);
      this.id = prm['id'];
      // Llamamos al servicio
      this.usuariosService.getUsuario(this.id)
        .subscribe((res: Usuario) => {
          console.log(res);
          this.usuario = res;
      });
    });
  }

  volver() {
    this.router.navigate(['/usuarios']);
  }

}
