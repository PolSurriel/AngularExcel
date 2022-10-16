import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  @Input() text : string = ""; 
  @Output() toggleit : EventEmitter<boolean> = new EventEmitter();

  activated : boolean = false;
  acceptToggleEvent : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


  /**
   * The click event is triggered twice, so we make use of acceptToggleEvent control attribute to compute only 'odd inputs'.
   */
  public onToggle() : void{
    if(this.acceptToggleEvent){
      this.activated = !this.activated;
      this.toggleit.emit(this.activated);
    }
    this.acceptToggleEvent = !this.acceptToggleEvent;
  }

}
