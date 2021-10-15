import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
  @Output() isClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickOnTask(): void {
    this.isClick.emit('Tarea1');
  }

}
