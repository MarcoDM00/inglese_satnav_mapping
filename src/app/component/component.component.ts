import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {valori} from '../dati';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
  id:number;
  readonly dati = valori;

  constructor(private route: ActivatedRoute) {} //creo oggetto per collegarmi alle routing

  ngOnInit(): void {
    this.route.params.subscribe( //in caso di parametri, si attiva la subscribe
      (params) => this.id = parseInt(params.id)
    );
  }
}
