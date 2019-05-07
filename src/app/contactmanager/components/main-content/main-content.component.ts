import { User } from '../../model/user';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      if (!id) {
        id = 1;
      }
      this.user = null;
      this.userService.users.subscribe(users => {
        if (users.length === 0) {
          return;
        } else {
          setTimeout(() => { // delayed to show spinner just for demo purposes.
            this.user = this.userService.userById(id);
            console.log('USER', this.user);
          }, 500);
        }
      });
    });
  }

}
