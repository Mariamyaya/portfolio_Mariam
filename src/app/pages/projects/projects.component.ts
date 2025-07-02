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

  projects = [
    {
      slug: 'gestion-de-patients',
      title: 'Gestion de patients',
      description: 'Mise en place d’une application web pour la gestion de l’hospitalisation des patients',
      techs: ['Angular','materialUI', 'Django','graphql'],
     screenshots: [
        '/images/Captures_flutter/inscrip_f.jpg',  
      ],
      image: '/images/Captures_patients/patient_list.png'
    },

    {
      slug: 'crm',
      title: 'CRM',
      description: 'Mise en place d’un logiciel de gestion des relations clients.',
      techs: ['Angular', 'Botstrap', 'FastREST', 'python'],
      link: 'https://github.com/Mariamyaya/CRM',
      screenshots: [
        '/images/Captures_flutter/inscrip_f.jpg',  
      ],
      image: '/images/Captures_CRM/Dashboard.png'
    },

    {
      slug: 'guide-touristique',
      title: 'Guide touristique',
      description: 'Création d’une application mobile de guide touristique.',
      techs: ['Flutter', ' Figma', 'MYSQL'],
      //link: 'https://github.com/Mariamyaya',
      screenshots: [
        '/images/Captures_flutter/inscrip_f.jpg',  
      ],
      image: '/images/Captures_flutter/accueil.jpg'
    },

    {
      slug: 'erp',
      title: 'ERP',
      description: 'Développement d’une application web (ERP) pour piloter la gestion d’un magasin (produits, ventes, achats, utilisateurs, etc.)',
      techs: ['J2E', 'JSTL','ChartJS', 'Postgresql'],
      link: 'https://github.com/Mariamyaya/ERP',
      screenshots: [
        '/images/Captures_flutter/inscrip_f.jpg',  
      ],
      image: '/images/Captures_ERP/home_p.png'
    },

     {
      slug: 'empt',
      title: 'Gestion des emplois de temps',
      description: 'Mise en place d’un logiciel permettant la gestion des emplois de temps',
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
      description: "Mise en place de mon portefolio contenant l'ensemble de mon parcours.",
      techs: ['Angular','netlify'],
      link: 'https://github.com/Mariamyaya/portfolio_Mariam',
      image: '/images/portfolio.png'
    },
   
  ]; 
}
