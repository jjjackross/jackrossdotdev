import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const homeButton = <HTMLElement>document.getElementsByClassName('poppins')[0];
    const projectsButton = <HTMLElement>document.getElementsByClassName('raleway')[0];
    const aboutButton = <HTMLElement>document.getElementsByClassName('raleway')[1];
    const contactButton = <HTMLElement>document.getElementsByClassName('raleway')[2];

    homeButton.style.textDecoration = "none";
    projectsButton.style.textDecoration = "none";
    aboutButton.style.textDecoration = "none";
    contactButton.style.textDecoration = "underline";

    const menu = <HTMLFormElement>document.getElementById('toggle');
    menu.checked = false;
  }

}
