import { Component, OnInit, ViewChild} from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Usuario } from '../../clases/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  columnas: string[] = ['id', 'name', 'username', 'email', 'detalle'];

  usuarios: Usuario[] = [];

  dataSource = null;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private usuariosService: UsuariosService,
              private router: Router) { }

  ngOnInit(): void {
    this.usuariosService.getAllUsuarios()
      .subscribe((res: Usuario[]) => {
        this.usuarios = res;
        this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    });
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  

  detalle(id: number) {
    //alert('Borrar usuario' + id);
    /*this.usuariosService.getUsuario(id)
      .subscribe(res => {
        console.log(res);
    });*/
    this.router.navigate(['/usuarios', id])
  }

  editar(id: number) {
    alert('Editar usuario' + id);
  }



}
