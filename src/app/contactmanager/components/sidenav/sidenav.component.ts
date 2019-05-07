import { UserService } from '../../services/user.service';
import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../../model/user';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  // for older versions of angular and angular material to fix responsiveness
  // constructor(zone: NgZone) {
  //   this.mediaMatcher.addListener(mql =>
  //     zone.run(() => this.mediaMatcher = mql));
  // }
  users: Observable<User[]>;

  constructor(
    private userServive: UserService,
    private router: Router,
    ) { }

  @ViewChild(MatSidenav) sidenav: MatSidenav;
  ngOnInit() {
    this.users = this.userServive.users;
    this.userServive.loadAll();

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav.close();
      }
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
