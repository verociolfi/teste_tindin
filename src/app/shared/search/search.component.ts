import { FilterService } from '../../services/filter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  text: string = "";
  constructor(public filterService: FilterService) { }

  ngOnInit(): void {
  }

  setText() {
    this.filterService.text = this.text;
  }
}
