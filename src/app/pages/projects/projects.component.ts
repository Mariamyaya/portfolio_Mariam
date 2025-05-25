import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
    imports: [CommonModule,  RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
/* 
  selectedProject: number | null = null;
  openModal(index: number) {
    this.selectedProject = index;
  }
  closeModal() {
    this.selectedProject = null;
  } */

  projects = [
    {
      slug: 'gestion-de-patients',
      title: 'Gestion de patients',
      description: 'Mise en place d’une application web pour la gestion de l’hospitalisation des patients',
      techs: ['Angular', 'Django', 'python','graphql'],
     // link: 'https://github.com/Mariamyaya',
     screenshots: [
        '/images/Captures_flutter/inscrip_f.jpg',  
      ],
      image: '/images/Captures_patients/patient_list.png'
    },

    {
      slug: 'crm',
      title: 'CRM',
      description: 'Mise en place d’un logiciel de gestion des relations clients.',
      techs: ['Angular', 'Botstrap', 'FastREST'],
      link: 'https://github.com/Mariamyaya',
      screenshots: [
        '/images/Captures_flutter/inscrip_f.jpg',  
      ],
      image: '/images/Captures_CRM/Dashboard.png'
    },

    {
      slug: 'guide-touristique',
      title: 'Guide touristique',
      description: 'Mise en place d’une application mobile de guide touristique.',
      techs: ['Flutter', ' Figma', 'PHP', 'MYSQL'],
      link: 'https://github.com/Mariamyaya',
      screenshots: [
        '/images/Captures_flutter/inscrip_f.jpg',  
      ],
      image: '/images/Captures_flutter/accueil.jpg'
    },

    {
      slug: 'erp',
      title: 'ERP',
      description: 'Mise en place d’une application web (ERP)',
      techs: ['J2E', 'JSTL','ChartJS', 'Postgresql'],
      link: 'https://github.com/Mariamyaya',
      screenshots: [
        '/images/Captures_flutter/inscrip_f.jpg',  
      ],
      image: '/images/Captures_ERP/home_p.png'
    },

     {
      slug: 'empt',
      title: 'Gestion des emplois de temps',
      description: 'Mise en place d’une logiciel permettant la gestion des emplois de temps',
      techs: ['J2E', 'JSTL','Hibernat', 'Postgresql'],
      //link: 'https://github.com/Mariamyaya',
      screenshots: [
        '/images/Captures_gestion-emp/Capture1.png',  
      ],
      image: '/images/Captures_gestion-emp/Capture1.PNG'
    },
   {
      slug: 'portfolio',
      title: 'Mon portfolio',
      description: 'Mise en place de mon portefolio contenant l ensemble de mon parcours.',
      techs: ['Angular','FireBase'],
      link: 'https://github.com/Mariamyaya',
      image: '/images/portfolio.png'
    },
   
  ]; 
}
