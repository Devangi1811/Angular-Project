import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  myimage:string="assets/Library-Solutions.jpg";

  constructor(private router:Router) { }
  signup(){
    this.router.navigate(['courses']);
  }
  cancel(){
    this.router.navigate(['home']);
  }
  twitter(){
    this.router.navigate(['courses']);
  }
  facebook(){
    this.router.navigate(['courses']);
  }
  google(){
    this.router.navigate(['courses']);
  }

  ngOnInit(): void {
  }

}
