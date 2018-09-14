import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.css']
})
export class MuroComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;
  @Input() post: string;
  constructor() { }

  ngOnInit() {
  }

}
