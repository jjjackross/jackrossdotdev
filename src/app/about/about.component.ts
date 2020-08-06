import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const homeButton = <HTMLElement>document.getElementsByClassName('poppins')[0];
    const projectsButton = <HTMLElement>document.getElementsByClassName('raleway')[0];
    const aboutButton = <HTMLElement>document.getElementsByClassName('raleway')[1];
    const contactButton = <HTMLElement>document.getElementsByClassName('raleway')[2];

    homeButton.style.textDecoration = "none";
    projectsButton.style.textDecoration = "none";
    aboutButton.style.textDecoration = "underline";
    contactButton.style.textDecoration = "none";

    const menu = <HTMLFormElement>document.getElementById('toggle');
    menu.checked = false;
  }

}
