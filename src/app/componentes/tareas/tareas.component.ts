import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Tarea } from '../../clases/Tarea';
import { DialogotareaComponent } from '../dialogotarea/dialogotarea.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TareasService } from '../../servicios/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  columnas: string[] = ['userId', 'id', 'title', 'completed', 'borrar'];

  tareas: Tarea[] = [];

  dataSource = null;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatTable) tabla: MatTable<Tarea>;

  constructor(public dialog: MatDialog,
              private tareasService: TareasService) { }

  ngOnInit(): void {
    this.tareasService.getAllTareas()
      .subscribe((res: Tarea[]) => {
        this.tareas = res;
        this.dataSource = new MatTableDataSource<Tarea>(this.tareas);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    });
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  


  abrirDialogo() {
    const dialogo1 = this.dialog.open(DialogotareaComponent, {
      data: new Tarea(0, 0, '', '')
    });

    dialogo1.afterClosed()
      .subscribe(tar => {
        if (tar != undefined)
          this.agregar(tar);
    });
  }

  // Esto no va
  borrarFila(userId: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.tareas.splice(userId, 1);
      this.tabla.renderRows();
    }
  }

  agregar(tar: Tarea) {
    this.tareas.push(new Tarea(tar.userId, tar.id, tar.title, tar.completed));
    this.tabla.renderRows();
  }
}