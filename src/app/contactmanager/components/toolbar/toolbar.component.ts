import { MatDialog } from '@angular/material';
import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddContactDialog(): void {
    const dialogRef = this.dialog.open(NewContactDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
