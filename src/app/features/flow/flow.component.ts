import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {

  displayModal: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showModalOptions(event: string): void {
    console.log(event);
    this.displayModal = true;
  }
}
