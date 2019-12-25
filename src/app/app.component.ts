import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-basics';
  name: string = 'Santosh';
  description: string = 'test test test';
  isVisible: boolean = true;
  data: string[] = [
    "one",
    "two",
    "three"
  ]

  ngOnInit() {

  }

  clickAction() {
    alert("I am clicked");
  }
}
