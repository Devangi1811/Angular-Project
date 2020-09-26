import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.scss']
})
export class PlacementComponent implements OnInit {

  constructor(private router:Router) { }
  next(){
    this.router.navigate(['placementone']);
  }

  ngOnInit(): void {
  }

}
