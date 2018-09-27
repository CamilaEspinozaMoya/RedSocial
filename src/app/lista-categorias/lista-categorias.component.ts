import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  typesOfFoods: string[] = ['Vegetariana', 'Vegana', 'Reería', 'Comida sana', 'Comida extranjera', 'Comida chilena', 'Gourmet'];
  constructor() { }

  ngOnInit() {
  }

}
