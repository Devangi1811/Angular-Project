import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myimage:string="assets/Library-Solutions.jpg";
  constructor(private router:Router){}
  signin(){
    this.router.navigate(['signin']);
  }
  logout(){
    alert("You are logged out");
  }
  login(){
    this.router.navigate(['login']);
  }
  placement(){
    this.router.navigate(['placement']);
  }



  ngOnInit(): void {
  }

}
