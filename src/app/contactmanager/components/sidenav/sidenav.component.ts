import { UserService } from '../../services/user.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../../model/user';

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

  constructor(private userServive: UserService) { }

  ngOnInit() {
    this.users = this.userServive.users;
    this.userServive.loadAll();
    this.users.subscribe(data => {
      console.log(data);
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
