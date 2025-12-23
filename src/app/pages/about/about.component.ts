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
   { name: 'React Native', icon: 'fab fa-react' },
  { name: 'Bootstrap, TailwindCSS', icon: 'fab fa-bootstrap' } 
];

backendTechnos = [
  { name: 'Django', icon: 'fas fa-leaf' }, 
  { name: 'Spring', icon: 'fas fa-server' }, 
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
      poste: 'Développeuse web (Stage)',
      entreprise: 'Vivace Consulting',
      annee: 'Février - Août 2024',
      description: 'Mise en place d’une application web pour la gestion de l’hospitalisation des patients.'
    },
    {
      poste: 'Développeuse JAVA (Stage)',
      entreprise: 'Global electronique',
      annee: 'Juillet - Septembre 2023',
      description: 'Mise en place d’une application web (ERP) pour piloter la gestion d’un magasin (produits, ventes, achats, utilisateurs, etc.)'
    },

    {
      poste: 'Développeuse Angular (Stage)',
      entreprise: 'Vivace Consulting',
      annee: 'Juin - Septembre 2022',
      description: 'Mise en place d’un logiciel de gestion des relations clients (CRM).'
    }
  ];


  experiences_acd = [

    {
      entreprise: 'Institut Supérieur du génie appliqué (IGA)',
      filiere: 'Filière: Informatique',
      annee: '2025',
      description: "Réalisation d'une application mobile de guide touristique développée avec React native"
    },
    {
      entreprise: 'Institut Supérieur du génie appliqué (IGA)',
      filiere: 'Filière: Génie Informatique',
      annee: '2023',
      description: "Réalisation d'un système permettant la reconnaissance faciale."
    },

    {
      filiere: 'Filière : Génie Informatique',
      entreprise: 'Institut Supérieur du Génie Appliqué (IGA)',
      annee: '2022',
      description: 'Conception et développement d’un logiciel de gestion des emplois du temps, intégrant la planification automatique des cours et la gestion des ressources pédagogiques.'
    },

    {
      filiere: 'Filière: Génie Informatique',
      entreprise: 'Institut Supérieur du génie appliqué (IGA)',
      annee: '2021',
      description: 'Création d’un site web de gestion des stocks.'
    }

    
  ];

}
