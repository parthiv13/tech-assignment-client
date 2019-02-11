import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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

}
