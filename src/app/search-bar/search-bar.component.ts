import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }
  searchText:any;
  FocusInput:boolean = true;
  onfocus(){
  this.FocusInput = false;
  }
  onBlur(){
  this.FocusInput = true;
  }
  ngOnInit(): void {
  }
  faMagnifyingGlass = faMagnifyingGlass;
  faArrowLeft = faArrowLeft;
}
