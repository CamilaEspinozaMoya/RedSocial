import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  typesOfFoods: string[] = ['Vegetariana', 'Vegana', 'Repostería', 'Comida sana', 'Comida Extranjera', 'Comida Chilena'];
  constructor() { }

  ngOnInit() {
  }

}
