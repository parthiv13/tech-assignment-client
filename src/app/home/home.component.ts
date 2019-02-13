import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from '../auth.service';
import { User } from '../User';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService,
      private router: Router
    ) { }

  profile: User;

  ngOnInit() {
    $(document).ready(function () {
      $("#goRight").click(function () {
        $(".smallerLayer").animate({
          'left': '0'
        });
        $(".smallerLayer__wrapper").animate({
          'left': '-100%'
        });
        $(".largerLayer").animate({
          'left': '40%'
        });
        $(".largerLayer__wrapper").animate({
          'left': '0%'
        })
      });
      $("#goLeft").click(function () {
        $(".smallerLayer").animate({
          'left': '60%'
        });
        $('.smallerLayer__wrapper').animate({
          'left': '0'
        });
        $('.largerLayer').animate({
          'left': '0'
        });
        $('.largerLayer__wrapper').animate({
          'left': '-100%'
        })
      })
    })
  }

  navigate() {
    this.router.navigate(['']);
  }

  signup() {
    var user = {
      email: '',
      name: '',
      password: ''
    };
    user.email = $('#upemail').val();
    //user.name = $('#upname').val();
    user.password = $('#uppass').val();
    console.log(user);
    this.authService.signup(user)
    .subscribe((el) => {
      if(el.message) {
        console.log(el)
        this.profile.name = el.name;
        this.navigate();
      }
    })
  }

  login() {
    var user = {
      email: '',
      name: '',
      password: ''
    };
    user.email = $('#inemail').val();
    user.password = $('#inpass').val();
    this.authService.login(user)
    .subscribe((el) => {
      if(el.message === 'Missing credentials') {
        console.log(el);
      } else {
        this.router.navigate([""]);
      }
    })
  }

}
