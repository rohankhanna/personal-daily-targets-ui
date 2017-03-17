import { Component, OnInit, Input, ElementRef } from '@angular/core';
declare var Timer:any;
@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timer : any;
  timeVal : any;
  @Input() config:any;
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    // debugger;
    this.timer = new Timer();
    this.timer.start(this.configureTimer());
    this.timer.pause();
    this.elementRef.nativeElement.childNodes[0].childNodes[3].childNodes[1].addEventListener('click', () => {
        this.timer.start(this.configureTimer());
        // this.timer.start({ countdown: true, startValues: {seconds: this.config.duration}});
    });
    this.elementRef.nativeElement.childNodes[0].childNodes[3].childNodes[3].addEventListener('click', () => {
        this.timer.pause();
    });
    this.elementRef.nativeElement.childNodes[0].childNodes[3].childNodes[5].addEventListener('click', () => {
        this.timer.stop();
    });
    this.timer.addEventListener('secondsUpdated', (e) => {
      console.log(this.timer.getTimeValues());
      this.elementRef.nativeElement.childNodes[0].childNodes[1].innerHTML = this.timer.getTimeValues().toString();
    });
  }
  configureTimer() {
    let obj:any = {};
    if (this.config.direction === 'down' ) {
      obj.countdown = true;
    }
    if ( this.config.duration ) {
        obj.precision = this.config.precision;
        obj.startValues = {
          seconds: this.config.duration
        };
    }
    return obj;
  }

}
