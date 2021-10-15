import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.scss']
})
export class DatosGeneralesComponent implements OnInit {

  checked: boolean = false;
  name: string = '';
  state: string = '';
  description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
