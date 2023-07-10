import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import LoginView from './views/LoginView.vue'
import SignupView from './views/SignupView.vue'
import DashboardLayout from './layouts/DashboardLayout.vue'
import DashboardLayoutPh from './layouts/DashboardLayoutPh.vue'
import DashboardPatientLayout from './layouts/DashboardPatientLayout.vue'
import ArticleLayout from './layouts/ArticleLayout.vue'

import MedicalFilesView from './views/Dashboard/MedicalFilesView.vue'
import MedicalFilesPH   from  './views/Dashboard/MedicalFilesPH.vue'
import PatientFileView from './views/Dashboard/PatientFile.vue'
import PatientFileViewPH from './views/Dashboard/PatientFilePH.vue'
import ProfileMed from './views/Dashboard/ProfileMed.vue'
import ProfilePH from './views/Dashboard/ProfilePH.vue'
import OrdonnanceP from './views/Dashboard/OrdonnanceP.vue'
import NotificationMed from './views/Dashboard/NotificationMed.vue'
import NotificationPh from './views/Dashboard/NotificationPh.vue'
import NotificationPatient from './views/DashboardPatient/NotificationPatient.vue'
import newMed from './views/Actualités/newMed.vue'
import FindPh from './views/Actualités/FindPh.vue'
import EvenConf from './views/Actualités/EvenConf.vue'
import ConseilSante from './views/Actualités/ConseilSante.vue'

import MedicalFileView from './views/DashboardPatient/MedicalFileView.vue'
import CarteSanitaire from './views/DashboardPatient/CarteSanitaire.vue'
import TherapieActuelle from './views/DashboardPatient/TherapieActuelle.vue'



const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SignupView
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardLayout,
        meta: {
            isPatient: false,
            proff:"med"
        },
        
        children: [
            {
                path: 'medicals-files',
                name: 'MedicalFiles',
                component: MedicalFilesView,
               
            },
            {
                path: 'Dossier-Medicale',
                name: 'DossierMedicale',
                component: PatientFileView,
                meta: {
                    id:"patient"
                    }
            }
            ,{
                path: 'profile',
                name: 'profileMed',
                component: ProfileMed
              
            },
            {
                path:'Therapie-Actuelle',
                name:'TherapieActuelle1',
                component: TherapieActuelle,
                meta: {
                    id:"patient"
                    }
            },
            {
                path:'NotificationMed',
                name:'NotificationMed',
                component: NotificationMed
            },
            {
                path:'OrdonnanceP',
                name:'OrdonnanceP2',
                component: OrdonnanceP,
                meta: {
                    id:"patient"
                    }
            },
            {
                path:'Carte-Sanitaire',
                name:'CarteSanitaire2',
                component: CarteSanitaire,
                meta: {
                    id:"patient"
                    }
            }
        ]
    },
    {
        path: '/dashboardPh',
        name: 'DashboardPh',
        component: DashboardLayoutPh,
        meta: {
            isPatient: false,
            proff:"pharma"
        },
        children: [
            {
                path: 'medical-files',
                name: 'Medical Files',
                component: MedicalFilesPH
            },
            {
                path: 'Dossier-Medicale',
                name: 'PatientFile',
                component: PatientFileViewPH,
                meta:{
                    id:"patient"
                }
            },
            {
                path: 'profile',
                name: 'profilePH',
                component: ProfilePH
            },
            {
                path:'Therapie-Actuelle',
                name:'TherapieActuelle2',
                component: TherapieActuelle,
                meta: {
                    id:"patient"
                    }
            },
            {
                path:'OrdonnanceP',
                name:'OrdonnanceP3',
                component: OrdonnanceP,
                meta: {
                    id:"patient"
                    }
            },
            {
                path:'NotificationPh',
                name:'NotificationPh',
                component: NotificationPh
            },
            {
                path:'Carte-Sanitaire',
                name:'CarteSanitaire3',
                component: CarteSanitaire,
                meta: {
                    id:"patient"
                    }
            }
        ]
    },
    {
        path: '/profile',
        name: 'Profile',
        component: DashboardPatientLayout,
        meta: {
            isPatient: true
        },
        children: [
            {
                path: 'Dossier-Medicale',
                name: 'Info',
                component: MedicalFileView
            },
            {
                path:'Carte-Sanitaire',
                name:'CarteSanitaire',
                component: CarteSanitaire
            },
            {
                path:'Therapie-Actuelle',
                name:'TherapieActuelle',
                component: TherapieActuelle
            },
            {
                path:'OrdonnanceP',
                name:'OrdonnanceP',
                component: OrdonnanceP
            },
            {
                path:'NotificationPatient',
                name:'NotificationPatient',
                component: NotificationPatient
            }
        ]
    },
    {
        path: '/article',
        name: 'article',
        component: ArticleLayout,
        children:[
            {
                path: 'newMed',
                name: 'newMed',
                component: newMed
            },
            {
                path: 'FindPh',
                name: 'FindPh',
                component: FindPh
            },
            {
                path: 'EvenConf',
                name: 'EvenConf',
                component: EvenConf
            },
            {
                path: 'ConseilSante',
                name: 'ConseilSante',
                component: ConseilSante
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
  
router.beforeEach((to, from, next) => {
    // Scroll to top when a route changes
    window.scrollTo(0, 0);
    next();
  });

export default router
