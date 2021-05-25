import { Component, ViewChild  } from '@angular/core';
import { Producto } from '../../clases/Producto';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent  {

  columnas: string[] = ['codigo', 'descripcion', 'precio'];

  productos: Producto[] = [];

  constructor() { }

  dataSource = null;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    for (let x = 1; x <= 20; x++){
      this.productos.push(new Producto(x, `producto ${x}`, Math.trunc(Math.random() * 1000)));
    }
    this.dataSource = new MatTableDataSource<Producto>(this.productos);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  

}
