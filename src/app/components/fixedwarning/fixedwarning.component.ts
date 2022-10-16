import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixedwarning',
  templateUrl: './fixedwarning.component.html',
  styleUrls: ['./fixedwarning.component.css']
})
export class FixedwarningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  messageEnabled : boolean = true;

  onClose() : void{
    this.messageEnabled = false;
  }

}
