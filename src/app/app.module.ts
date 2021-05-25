import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';

import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { DialogotareaComponent } from './componentes/dialogotarea/dialogotarea.component';
import { UsuarioDetalleComponent } from './componentes/usuario-detalle/usuario-detalle.component';
import { MenuPerfilComponent } from './componentes/menu-perfil/menu-perfil.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    ClientesComponent,
    ProductosComponent,
    FacturasComponent,
    UsuariosComponent,
    TareasComponent,
    DialogotareaComponent,
    UsuarioDetalleComponent,
    MenuPerfilComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
