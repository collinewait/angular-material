import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Note } from 'src/app/contactmanager/model/note';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, AfterViewInit {
@Input() notes: Note[];

  displayedColumns: string[] = ['id', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;
  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Note >(this.notes);
    console.log('Notes', typeof(this.notes[0].id));
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
