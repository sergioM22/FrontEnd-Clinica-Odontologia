import { StartComponent } from './pages/user/start/start.component';
import { InstruccionesComponent } from './pages/user/instrucciones/instrucciones.component';
import { LoadExamenComponent } from './pages/user/load-examen/load-examen.component';
import { ActualizarPreguntaComponent } from './pages/admin/actualizar-pregunta/actualizar-pregunta.component';
import { AddPreguntaComponent } from './pages/admin/add-pregunta/add-pregunta.component';
import { ViewExamenPreguntasComponent } from './pages/admin/view-examen-preguntas/view-examen-preguntas.component';
import { AddExamenComponent } from './pages/admin/add-examen/add-examen.component';
import { ViewExamenesComponent } from './pages/admin/view-examenes/view-examenes.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarExamenComponent } from './pages/admin/actualizar-examen/actualizar-examen.component';
import { CitaComponent } from './pages/user/cita/cita.component';
import { ChatComponent } from './pages/chat/chat.component';
import { UserDashboardCliComponent } from './pages/user_cli/user-dashboard-cli/user-dashboard-cli.component';
import { WelcomeCliComponent } from './pages/user_cli/welcome-cli/welcome-cli.component';
import { ProfileCliComponent } from './pages/user_cli/profile-cli/profile-cli.component';
import { CitaCliComponent } from './pages/user_cli/cita-cli/cita-cli.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  { path: 'chat', component: ChatComponent, pathMatch: 'full' },
  //{ path: 'user', component: UserDashboardComponent, pathMatch: 'full' },
  {
    path : 'citaspendientes',
    component : CitaComponent,
    pathMatch : 'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path : '',
        component : WelcomeComponent
      },
      {
        path:'categorias',
        component:ViewCategoriasComponent
      },
      {
        path:'add-categoria',
        component:AddCategoriaComponent
      },
      {
        path:'examenes',
        component:ViewExamenesComponent
      },
      {
        path:'add-examen',
        component:AddExamenComponent
      },
      {
        path:'examen/:examenId',
        component:ActualizarExamenComponent
      },
      {
        path:'ver-preguntas/:examenId/:titulo',
        component:ViewExamenPreguntasComponent
      },
      {
        path:'add-pregunta/:examenId/:titulo',
        component : AddPreguntaComponent
      },
      {
        path:'pregunta/:preguntaId',
        component:ActualizarPreguntaComponent
      }
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children : [
      {
        path:':catId',
        component:LoadExamenComponent
      },
      {
        path:'instrucciones/:examenId',
        component:InstruccionesComponent
      },
    ]
  },
  {
path : 'user-dasboard_cli',
component:UserDashboardCliComponent,
canActivate:[NormalGuard],
children: [
  {
  path:'',
  component:WelcomeCliComponent
  },
  {
    path:'profile',
    component:ProfileCliComponent
  },
  {
    path:'citaCliente',
    component:CitaCliComponent
  }
]
  }, 
  {
    path:"start/:examenId",
    component:StartComponent,
    canActivate:[NormalGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
