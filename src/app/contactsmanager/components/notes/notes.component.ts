import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Note } from 'src/app/contactmanager/model/note';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, AfterViewInit {
@Input() notes: Note[];

  displayedColumns: string[] = ['position', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;
  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Note >(this.notes);
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
