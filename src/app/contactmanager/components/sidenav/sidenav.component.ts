import { Component, OnInit, NgZone } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
