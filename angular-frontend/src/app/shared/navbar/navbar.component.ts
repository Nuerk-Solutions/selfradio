import { Component, OnInit } from '@angular/core';
import { faMusic, faThList } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faMusic = faMusic;
  faThList = faThList

  constructor() { }

  ngOnInit(): void {
  }

}
