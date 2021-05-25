import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { UsuarioDetalleComponent } from './componentes/usuario-detalle/usuario-detalle.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'facturas',
    component: FacturasComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'usuarios/:id',
    component: UsuarioDetalleComponent
  },
  {
    path: 'tareas',
    component: TareasComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: '**',
    component: ClientesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
