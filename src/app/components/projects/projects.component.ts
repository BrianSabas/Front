import { Component, OnInit } from '@angular/core';
import { faAdd, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  faPen = faPen;
  faAdd = faAdd;
  faTrash = faTrash;
}
