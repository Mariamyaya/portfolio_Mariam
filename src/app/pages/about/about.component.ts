import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
   imports: [CommonModule ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

frontendTechnos = [
  { name: 'HTML, CSS', icon: 'fab fa-html5' },
  { name: 'JavaScript / TypeScript', icon: 'fab fa-js' },
  { name: 'Angular', icon: 'fab fa-angular' },
  { name: 'Bootstrap, TailwindCSS', icon: 'fab fa-bootstrap' } 
];

backendTechnos = [
  { name: 'Django', icon: 'fas fa-leaf' }, 
  { name: 'MySQL, PostgreSQL', icon: 'fas fa-database' },
  { name: 'Java', icon: 'fab fa-java' },
  { name: 'Python', icon: 'fab fa-python' }
];

designUi = [
  { name: 'Figma', icon: 'fab fa-figma' },
  { name: 'Responsive Design / UI', icon: 'fas fa-mobile-alt' }
];

outilDeVersion = [
  { name: 'Git / GitHub / GitLab', icon: 'fab fa-git-alt' },
  { name: 'Agile / Scrum', icon: 'fas fa-project-diagram' } 
];




  experiences = [
    {
      poste: 'Déveuloppeuse web (Stage PFE)',
      entreprise: 'Vivace Consulting',
      annee: '2024',
      description: 'Mise en place d’une application web pour la gestion de l’hospitalisation des patients.'
    },
    {
      poste: 'Développeuse JAVA (Stage)',
      entreprise: 'Global electronique',
      annee: '2023',
      description: 'Création d’un module de gestion des soins médicaux.'
    },

    {
      poste: 'Développeuse Angular (Stage)',
      entreprise: 'Vivace Consulting',
      annee: '2022',
      description: 'Création d’un CRM.'
    }
  ];


  experiences_acd = [
    {
      poste: 'Déveuloppeuse Mobile',
      entreprise: 'IGA',
      annee: '2023',
      description: 'Mise en place d’une application mobile de guide touristique.'
    },

    {
      poste: 'Développeuse Java',
      entreprise: 'IGA',
      annee: '2023',
      description: 'Gestion des emploi du temps.'
    },
    {
      poste: 'Développeuse web',
      entreprise: 'IGA',
      annee: '2022',
      description: 'Création d’un site web de gestion des stocks.'
    }

    
  ];

}
