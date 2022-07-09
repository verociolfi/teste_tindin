import { FilterService } from './../../services/filter.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-logged',
  templateUrl: './search-logged.component.html',
  styleUrls: ['./search-logged.component.css']
})
export class SearchLoggedComponent implements OnInit {

  constructor(public filterService:FilterService,
    private router:Router) { }

  ngOnInit(): void {
  }

  newGame() {
    this.router.navigate(['create']);

  }

}
