import { Component, OnInit } from '@angular/core';
import { Quote }from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote [] = [
    new  Quote (1,"Hammerton", "The best is yet to come",0,0),
    new Quote (2,"Simon kimani", "Get ready for change",0,0),
    new Quote (3,"Kelvin Mbugua","Change is inevitable",0,0),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }

}
