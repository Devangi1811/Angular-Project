import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  login(){
    this.router.navigate(['courses']);
  }
  facebook(){
    this.router.navigate(['courses']);
  }
  twitter(){
    this.router.navigate(['courses']);
  }
  google(){
    this.router.navigate(['courses']);
  }

  ngOnInit(): void {
  }

}
