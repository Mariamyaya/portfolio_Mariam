import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {

  project: any;
  currentIndex = 0;

  allProjects = [
    {
      slug: 'gestion-de-patients',
      title: 'Gestion de patients',
      description: 'Application web pour l’hospitalisation des patients.',
      techs: ['Angular', 'Django'],
      screenshots: [
        '/images/Captures_patients/patient-form1.png',
        '/images/Captures_patients/patient-form2.png',
        '/images/Captures_patients/patient-merge.png',
        '/images/Captures_patients/fusion_confirm.png'
      ]
    },
    {
      slug: 'crm',
      title: 'Gestion de gestions',
      description: 'Mise en place d’un logiciel de gestion des relations clients.',
      techs: ['Angular', 'FastApi'],
      screenshots: [
        '/images/Captures_CRM/AjoutClient.png',
        '/images/Captures_CRM/AjoutProduit.png',
        '/images/Captures_CRM/AjoutVente.png',
        '/images/Captures_CRM/Vente.png'
      ]
    },

    {
      slug: 'guide-touristique',
      title: 'Guide touristique',
      description: 'Mise en place d’une application mobile de guide touristique.',
      techs: ['Flutter', ' Figma', 'PHP', 'MYSQL'],
      screenshots: [
        '/images/Captures_flutter/inscrip_f.jpg',
        '/images/Captures_flutter/accueil.jpg',
        '/images/Captures_flutter/Transport.jpg',
        '/images/Captures_flutter/endroit_f.jpg',
        '/images/Captures_flutter/Lieu.jpg',
        '/images/Captures_flutter/liste_monum.jpg',
         '/images/Captures_flutter/partage.jpg',
        
      ]
    },

    {
      slug: 'erp',
      title: 'ERP',
      description: 'Mise en place d’une application web (ERP)',
      techs: ['J2E', 'JSTL','ChartJS', 'Postgresql'],
       screenshots: [
        '/images/Captures_ERP/login.png',
        '/images/Captures_ERP/admin.png',
        '/images/Captures_ERP/User_p.png',
        '/images/Captures_ERP/Achat_p.png',
        '/images/Captures_ERP/home_p.png',
      ]
    },

    {
      slug: 'empt',
      title: 'Gestion emploi du temps',
      description: 'Mise en place d’une logiciel permettant la gestion des emplois de temps',
      techs: ['J2E', 'JSTL','ChartJS', 'Postgresql'],
        screenshots: [
        '/images/Captures_gestion-emp/Capture1.PNG', 
        '/images/Captures_gestion-emp/Capture2.PNG', 
        '/images/Captures_gestion-emp/Capture3.PNG', 
        '/images/Captures_gestion-emp/Capture4.PNG', 
        '/images/Captures_gestion-emp/Capture5.PNG',  
      ],
    },

   {
      slug: 'portfolio',
      title: 'Mon portfolio',
      description: 'Mise en place de mon portefolio contenant l ensemble de mon parcours.',
      techs: ['Angular','FireBase'],
      screenshots: [
        '/images/portfolio.png'
      ]
    },
   
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Écoute dynamique même si tu reviens plusieurs fois sur ce composant
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.project = this.allProjects.find(p => p.slug === slug);
      this.currentIndex = 0;
    });
  }

  prevImage() {
    if (this.project?.screenshots.length) {
      this.currentIndex = (this.currentIndex - 1 + this.project.screenshots.length) % this.project.screenshots.length;
    }
  }

  nextImage() {
    if (this.project?.screenshots.length) {
      this.currentIndex = (this.currentIndex + 1) % this.project.screenshots.length;
    }
  }

}
