import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  dt: any;
  profile: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.authService.getProfile()
    .subscribe(el => {
      this.profile = el;
    })
  }
}
