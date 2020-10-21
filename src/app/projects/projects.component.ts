import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const homeButton = <HTMLElement>document.getElementsByClassName('poppins')[0];
    const projectsButton = <HTMLElement>document.getElementsByClassName('raleway')[0];
    const aboutButton = <HTMLElement>document.getElementsByClassName('raleway')[1];
    const contactButton = <HTMLElement>document.getElementsByClassName('raleway')[2];

    homeButton.style.textDecoration = "none";
    projectsButton.style.textDecoration = "underline";
    aboutButton.style.textDecoration = "none";
    contactButton.style.textDecoration = "none";

    const menu = <HTMLFormElement>document.getElementById('toggle');
    menu.checked = false;

    const accordion1_top_nav = <HTMLElement>document.getElementsByClassName('accordion_nav')[0];
    const accordion1_bot_nav = <HTMLElement>document.getElementsByClassName('accordion_nav')[1];
    const accordion1 = <HTMLElement>document.getElementById('accordion1');
    accordion1_top_nav.addEventListener('click', () => {
      accordion1.classList.toggle('accordion_visible')
    });
    accordion1_bot_nav.addEventListener('click', () => {
      accordion1.classList.toggle('accordion_visible')
    });

    // document.querySelectorAll('accordion_nav').forEach(nav => {
    //   // const accordionContent = nav.nextElementSibling;
    //   const accordionContent = <HTMLElement>document.getElementById('accordion');
    //   nav.addEventListener('click', () => {

    //     accordionContent.classList.toggle('accordion_visible');
    //   });
    // });
  }
}
