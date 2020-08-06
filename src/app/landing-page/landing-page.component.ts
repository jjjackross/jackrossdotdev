import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const homeButton = <HTMLElement>document.getElementsByClassName('poppins')[0];
    const projectsButton = <HTMLElement>document.getElementsByClassName('raleway')[0];
    const aboutButton = <HTMLElement>document.getElementsByClassName('raleway')[1];
    const contactButton = <HTMLElement>document.getElementsByClassName('raleway')[2];

    homeButton.style.textDecoration = "underline";
    projectsButton.style.textDecoration = "none";
    aboutButton.style.textDecoration = "none";
    contactButton.style.textDecoration = "none";

    const menu = <HTMLFormElement>document.getElementById('toggle');
    menu.checked = false;
  }

}
