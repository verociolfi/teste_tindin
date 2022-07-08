import { FilterService } from './../../services/filter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-logged',
  templateUrl: './search-logged.component.html',
  styleUrls: ['./search-logged.component.css']
})
export class SearchLoggedComponent implements OnInit {

  constructor(public filterService:FilterService) { }

  ngOnInit(): void {
  }

  newGame() {

  }

}
