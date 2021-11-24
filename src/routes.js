/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 vistao.co (https://www.creative-tim.com)

* Coded by vistao.co

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Videos from "views/v0/Videos.js";
import Resumes from "views/v0/Resumes.js";
import VideoGameSheet from "views/v0/VideoGameSheet.js";
import CreateSummary from "views/v0/CreateSummary.js";
import PlaySummary from "views/v0/PlaySummary.js";
import Studio from "views/v0/Studio.js";
import Plans from "views/v0/pages/Plans.js";
import Register from "views/v0/pages/Register.js";
import Timeline from "views/v0/pages/Timeline.js";
import ClubInfos from "views/v0/ClubInfos.js";
import Login from "views/v0/pages/Login.js";
import PlayerProfile from "views/v0/PlayerProfile.js";
import CoachProfile from "views/v0/CoachProfile.js";
import PasseOublie from "views/v0/pages/PasseOublie.js";
import EmailPasseOublie from "views/v0/pages/EmailPasseOublie.js";

const routes = [
  {
    collapse: true,
    name: "Profil",
    rtlName: "صفحات",
    icon: "tim-icons icon-single-02",
    state: "pagesCollapse",
    views: [
      {
        path: "/profil-joueur",
        name: "Profil joueur",
        rtlName: "التقويم",
        icon: "tim-icons icon-single-02",
        mini: "P",
        component: PlayerProfile,
        layout: "/admin",
      },
      {
        path: "/profil-coach",
        name: "Profil coach",
        rtlName: "التقويم",
        icon: "tim-icons icon-single-02",
        mini: "P",
        component: CoachProfile,
        layout: "/admin",
      },
      {
        path: "/timeline",
        name: "Didacticiel",
        rtlName: "تيالجدول الزمني",
        icon: "tim-icons icon-book-bookmark",
        mini: "D",
        rtlMini: "تي",
        component: Timeline,
        layout: "/admin",
      },
      {
        collapse: true,
        name: "Mon compte",
        rtlName: "انهيار متعدد المستويات",
        icon: "tim-icons icon-single-02",
        mini: "MC",
        rtlMini: "ر",
        state: "Mon compte",
        views: [
          {
            path: "/register",
            name: "S'inscrire",
            rtlName: "تسجيل",
            icon: "tim-icons icon-badge",
            mini: "R",
            rtlMini: "صع",
            component: Register,
            layout: "/auth",
          },
          /*
          {
            path: "/register-club",
            name: "S'inscrire vers club",
            rtlName: "تسجيل",
            icon: "tim-icons icon-badge",
            mini: "R",
            rtlMini: "صع",
            component: RegisterClub,
            layout: "/auth",
          },
        */
          {
            path: "/login",
            name: "Login",
            rtlName: "هعذاتسجيل الدخول",
            icon: "tim-icons icon-button-power",
            mini: "L",
            rtlMini: "هعذا",
            component: Login,
            layout: "/auth",
          },
          {
            path: "/email-mot-de-passe-oublie",
            name: "Email passe oublié",
            rtlName: "هعذاتسجيل الدخول",
            mini: "ERP",
            rtlMini: "هعذا",
            component: EmailPasseOublie,
            icon: "tim-icons icon-settings-gear-63",
            layout: "/auth",
          },
          {
            path: "/mot-de-passe-oublie",
            name: "Mot de passe oublié",
            rtlName: "هعذاتسجيل الدخول",
            icon: "tim-icons icon-settings-gear-63",
            mini: "MPO",
            rtlMini: "هعذا",
            component: PasseOublie,
            layout: "/auth",
          },
          /*
          {
            path: "/lock-screen",
            name: "Vérouiller l'écran",
            rtlName: "اقفل الشاشة",
            icon: "tim-icons icon-lock-circle",
            mini: "VE",
            rtlMini: "هذاع",
            component: Lock,
            layout: "/auth",
          },
          */

        ],
      },
    ],
  },
  {
    path: "/plans",
    name: "Plans",
    rtlName: "تيالجدول الزمني",
    icon: "tim-icons icon-bullet-list-67",
    mini: "AP",
    rtlMini: "تي",
    component: Plans,
    layout: "/admin",
  },

  {
    path: "/informations-club",
    name: "Club",
    rtlName: "تيالجدول الزمني",
    icon: "tim-icons icon-trophy",
    mini: "FCA",
    rtlMini: "تي",
    component: ClubInfos,
    layout: "/admin",
  },
/*!
  {
    collapse: true,
    name: "Communauté",
    rtlName: "صفحات",
    icon: "tim-icons icon-world",
    state: "CommunauteCollapse",
    views: [

      {
        collapse: true,
        name: "Club",
        rtlName: "انهيار متعدد المستويات",
        icon: "tim-icons icon-trophy",
        rtlMini: "ر",
        state: "Club",
        views: [
      {
        path: "/informations-club",
        name: "Panel",
        rtlName: "تيالجدول الزمني",
        icon: "tim-icons icon-single-02",
        mini: "FCA",
        rtlMini: "تي",
        component: ClubInfos,
        layout: "/admin",
      },
      {
        path: "/ajouter-membre",
        name: "Ajouter un membre",
        rtlName: "تيالجدول الزمني",
        icon: "tim-icons icon-simple-add",
        mini: "AP",
        rtlMini: "تي",
        component: NouveauMembre,
        layout: "/admin",
      },
      {
        path: "/joindre-communaute",
        name: "Joindre une communauté",
        rtlName: "تيالجدول الزمني",
        icon: "tim-icons icon-double-right",
        mini: "AP",
        rtlMini: "تي",
        component: JoindreCommunaute,
        layout: "/admin",
      },
    ],
  },



      {
        collapse: true,
        name: "Joueurs",
        rtlName: "انهيار متعدد المستويات",
        icon: "tim-icons icon-user-run",
        rtlMini: "ر",
        state: "Joueurs",
        views: [
      {
        path: "/informations-joueur",
        name: "Panel",
        rtlName: "تيالجدول الزمني",
        icon: "tim-icons icon-single-02",
        mini: "JA",
        rtlMini: "تي",
        component: JoueurInfos,
        layout: "/admin",
      },
      {
        path: "/ajouter-membre",
        name: "Ajouter un membre",
        rtlName: "تيالجدول الزمني",
        icon: "tim-icons icon-simple-add",
        mini: "AP",
        rtlMini: "تي",
        component: NouveauMembre,
        layout: "/admin",
      },
      {
        path: "/joindre-communaute",
        name: "Joindre une communauté",
        rtlName: "تيالجدول الزمني",
        icon: "tim-icons icon-double-right",
        mini: "AP",
        rtlMini: "تي",
        component: JoindreCommunaute,
        layout: "/admin",
      },
    ],
  },
  ],
  },
  */
 
  { 
      collapse: true,
      name: "vidéos",
      rtlName: "لوحة القيادة",
      icon: "tim-icons icon-video-66",
      state: "MatchsCollapse",
      views: [
        {
          path: "/videos",
          name: "Mes vidéos",
          icon: "tim-icons icon-triangle-right-17",
          rtlName: "تسجيل",
          mini: "V",
          rtlMini: "صع",
          component: Videos,
          layout: "/admin",
        },
        {
          path: "/creer-video",
          name: "Nouvelle vidéo",
          icon: "tim-icons icon-simple-add",
          rtlName: "تسجيل",
          mini: "U",
          rtlMini: "صع",
          component: VideoGameSheet,
          layout: "/admin",
        },

        {
          path: "/studio",
          name: "Studio",
          icon: "tim-icons icon-video-66",
          rtlName: "تسجيل",
          mini: "S",
          rtlMini: "صع",
          component: Studio,
          layout: "/admin",
        },
        {
          path: "/create-summary",
          name: "Créer le résumé",
          icon: "tim-icons icon-simple-add",
          rtlName: "تسجيل",
          mini: "U",
          rtlMini: "صع",
          component: CreateSummary,
          layout: "/admin",
        },
     ],
  },
  {
    collapse: true,
    name: "Résumés",
    rtlName: "صفحات",
    icon: "tim-icons icon-triangle-right-17",
    state: "SummaryCollapse",
    views: [

      {
        path: "/resumes",
        name: "mes résumés",
        rtlName: "خرائط",
        icon: "tim-icons icon-triangle-right-17",
        mini: "R",
        rtlMini: "صع",
        component: Resumes,
        layout: "/admin",
      
      },

      {
        path: "/jouer-resume",
        name: "jouer le résumé",
        icon: "tim-icons icon-triangle-right-17",
        rtlName: "تسجيل",
        mini: "PS",
        rtlMini: "صع",
        component: PlaySummary,
        layout: "/admin",
      },
    ],
  },
  /*
  {
    collapse: true,
    name: "Statistiques",
    rtlName: "صفحات",
    icon: "tim-icons icon-chart-bar-32",
    state: "StatistiquesCollapse",
    views: [

      {
        collapse: true,
        name: "Mes dashboards",
        rtlName: "صفحات",
        icon: "tim-icons icon-chart-pie-36",
        state: "MesDashboardsCollapse",
        views: [    
      {
        path: "/admin/mes-dashboards",
        name: "Mes dashboards",
        rtlName: "تسجيل",
        icon: "tim-icons icon-molecule-40",
        mini: "MD",
        component: MesDashboards,
        layout: "/admin",
      }, 
      {
        path: "/statistiques/dashboard",
        name: "Dashboard",
        rtlName: "تسجيل",
        icon: "tim-icons icon-chart-pie-36",
        mini: "D",
        component: Dashboard,
        layout: "/admin",
      }, 
      {
        path: "/statistiques/creer-analyse",
        name: "Créer une analyse",
        rtlName: "تسجيل",
        icon: "tim-icons icon-simple-add",
        mini: "CA",
        component: CreateAnalysis,
        layout: "/admin",
      }, 
      ]   
    },
    {
      collapse: true,
      name: "Mes Analyses",
      rtlName: "صفحات",
      icon: "tim-icons icon-chart-pie-36",
      state: "MesAnalysesCollapse",
      views: [
    {
      path: "/analyses",
      name: "mes analyses",
      rtlName: "خرائط",
      icon: "tim-icons icon-molecule-40",
      mini: "MA",
      rtlMini: "صع",
      component: Analyses,
      layout: "/admin",
    },
    {
      path: "/analyse-video",
      name: "analyse vidéo",
      rtlName: "خرائط",
      icon: "tim-icons icon-chart-pie-36",
      mini: "AV",
      rtlMini: "صع",
      component: AnalyseVideo,
      layout: "/admin",
    },
  ]
},
    {
      collapse: true,
      name: "Mes suivis",
      rtlName: "صفحات",
      icon: "tim-icons icon-sound-wave",
      state: "MesSuivisCollapse",
      views: [
        {
          path: "/statistiques/dashbaord-suivi",
          name: "Dashboard de suivi",
          rtlName: "تسجيل",
          icon: "tim-icons icon-chart-bar-32",
          mini: "DS",
          component: DashboardMonitoring,
          layout: "/admin",
        }, 
        {
          path: "/statistiques/creer-monitoring",
          name: "Créer un suivi",
          rtlName: "تسجيل",
          icon: "tim-icons tim-icons icon-simple-add",
          mini: "CS",
          component: CreateMonitoring,
          layout: "/admin",
        }, 
      {
        path: "/admin/suivi",
        name: "Suivis",
        rtlName: "تسجيل",
        icon: "tim-icons icon-molecule-40",
        mini: "S",
        component: Suivis,
        layout: "/admin",
      }, 
      {
        path: "/analyse-suivi",
        name: "analyse suivi",
        rtlName: "خرائط",
        icon: "tim-icons icon-chart-bar-32",
        mini: "AS",
        rtlMini: "صع",
        component: AnalyseSuivi,
        layout: "/admin",
      },
    ]
  }
    ],
  },
  */
];

export default routes;
