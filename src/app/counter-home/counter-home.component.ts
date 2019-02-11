import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-ui';

@Component({
  selector: 'app-counter-home',
  templateUrl: './counter-home.component.html',
  styleUrls: ['./counter-home.component.css']
})
export class CounterHomeComponent implements OnInit {
  targetDate:any = new Date("2019/06/21 00:00:00");
  min: number =0; noDays: number = 0; sec: number = 0; hrs: number = 0; currentDate: any = 0; diff :number; diff2 :number;
  constructor() { }

  ngOnInit() {
    $(document).ready( () => {
      this.currentDate = new Date();
      console.log(this.currentDate)
      this.diff = (this.currentDate - this.targetDate)/1000;
      this.diff = Math.abs(Math.floor(this.diff));  

      this.noDays = Math.floor(this.diff/(24*60*60));
      this.sec = this.diff - this.noDays * 24*60*60;

      this.hrs = Math.floor(this.sec/(60*60));
      this.sec = this.sec - this.hrs * 60*60;

      this.min = Math.floor(this.sec/(60));
      this.sec = this.sec - this.min * 60;
      console.log(this.sec);
      console.log(this.min)
      console.log(this.hrs)
      console.log(this.noDays)
      
      this.numberTransition('#days .number', this.noDays, 1000, 'easeOutQuad');
      this.numberTransition('#hours .number', this.hrs, 1000, 'easeOutQuad');
      this.numberTransition('#minutes .number', this.min, 1000, 'easeOutQuad');
      this.numberTransition('#seconds .number', this.sec, 1000, 'easeOutQuad');

      setInterval(() => {
        this.currentDate = new Date();
        this.diff = (this.currentDate - this.targetDate)/1000;
        this.diff = Math.abs(Math.floor(this.diff)); 
        //console.log(this.diff);

        this.noDays = Math.floor(this.diff/(24*60*60));
        //console.log(this.noDays);
        this.sec = this.diff - this.noDays * 24*60*60;
        //console.log(this.sec);

        this.hrs = Math.floor(this.sec/(60*60));
        //console.log(this.hrs);
        this.sec = this.sec - this.hrs * 60*60;
        //console.log(this.sec);

        this.min = Math.floor(this.sec/(60));
        //console.log(this.min);
        this.sec = this.sec - this.min * 60;
        //console.log(this.sec);

        $("#days .number").text(this.noDays);
        console.log(this.noDays);
        $("#hrs").text(this.hrs);
        console.log(this.hrs);
        $("#min").text(this.min);
        console.log(this.min);
        $("#sec").text(this.sec);
        console.log(this.sec);

      },1000);
    });
    
  }  

  timeToLaunch() :void {
    this.currentDate = new Date();
    this.diff = (this.currentDate - this.targetDate)/1000;
    this.diff = Math.abs(Math.floor(this.diff));  

    this.noDays = Math.floor(this.diff/(24*60*60));
    this.sec = this.diff - this.noDays * 24*60*60;

    this.hrs = Math.floor(this.sec/(60*60));
    this.sec = this.sec - this.hrs * 60*60;

    this.min = Math.floor(this.sec/(60));
    this.sec = this.sec - this.min * 60;
  }

  countDownTimer() :void { 
    
    // Figure out the time to launch
    this.currentDate = new Date();
    this.diff = (this.currentDate - this.targetDate)/1000;
    this.diff = Math.abs(Math.floor(this.diff));  
    
    var days, sec, min, hrs;
    this.noDays = Math.floor(this.diff/(24*60*60));
    
    this.sec = this.diff - this.noDays * 24*60*60;
    

    this.hrs = Math.floor(this.sec/(60*60));
    
    this.sec = this.sec - this.hrs * 60*60;
    //console.log(this.sec);

    this.min = Math.floor(this.sec/(60));
    
    this.sec = this.sec - this.min * 60;
    //console.log(this.sec);
    
    // Write to countdown component
    $( "#days .number" ).text(this.noDays);
    console.log(this.noDays);
    $( "#hours .number" ).text(this.hrs);
    console.log(this.hrs);
    $( "#minutes .number" ).text(this.min);
    console.log(this.min);
    $( "#seconds .number" ).text(this.sec);
    console.log(this.sec);
    
    // Repeat the check every second
    setTimeout(this.countDownTimer,1000);
  }

  numberTransition(id, endPoint, transitionDuration, transitionEase){
    // Transition numbers from 0 to the final number
    $({numberCount: $(id).text()}).animate({numberCount: endPoint}, {
        duration: transitionDuration,
        
        step: function() {
          $(id).text(Math.floor(this.numberCount));
        },
        complete: function() {
          $(id).text(this.numberCount);
        }
     }); 
  };

}
