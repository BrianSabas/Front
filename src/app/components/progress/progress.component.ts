import { Component, OnInit } from '@angular/core';
import { faAdd, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faPen = faPen;
  faAdd = faAdd;
  faTrash = faTrash;
}
