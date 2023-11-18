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

import { HomeComponentCard } from './Cart/home/home.component';
import { HeaderComponent } from './Cart/header/header.component';
import { ShowProductDetailsComponent } from './Cart/show-product-details/show-product-details.component';
import { OrderDetailsComponent } from './Cart/order-details/order-details.component';
import { ProductViewDetailsComponent } from './Cart/product-view-details/product-view-details.component';
import { BuyProductComponent } from './Cart/buy-product/buy-product.component';
import { BuyProductResolverService } from './Cart/buy-product-resolver.service';
import { CartComponent } from './Cart/cart/cart.component';
import { OrderConfirmationComponent } from './Cart/order-confirmation/order-confirmation.component';
import { MyOrdersComponent } from './Cart/my-orders/my-orders.component';
import { AddNewProductComponent } from './Cart/add-new-product/add-new-product.component';
import { ProductResolveService } from './Cart/product-resolve.service';

 

import { UserDashboardCliComponent } from './pages/user_cli/user-dashboard-cli/user-dashboard-cli.component';
import { WelcomeCliComponent } from './pages/user_cli/welcome-cli/welcome-cli.component';
import { ProfileCliComponent } from './pages/user_cli/profile-cli/profile-cli.component';
import { CitaCliComponent } from './pages/user_cli/cita-cli/cita-cli.component';

import { MedicoGuard } from './services/medico.guard';

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
    canActivate:[MedicoGuard],
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
  //SERGIO YP 20231116 SHOPPING-CARD
  ,
  { path: 'header', component: HeaderComponent, pathMatch: 'full' },
  { path: 'home-card', component: HomeComponentCard, pathMatch: 'full' },
  {
    path: "showProductDetails",
    component: ShowProductDetailsComponent,
    pathMatch : 'full',
  },
  {
    path: "orderInformation",
    component: OrderDetailsComponent,
    pathMatch : 'full',
  },
  {
    path: "productViewDetails",
    component: ProductViewDetailsComponent,
    pathMatch : 'full'
  },
  {
    path: "buyProduct",
    component: BuyProductComponent,
    resolve: {
      productDetails: BuyProductResolverService,
    },
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path:"orderConfirm",
    component: OrderConfirmationComponent,
  },
  {
    path:"myOrders",
    component: MyOrdersComponent,
  },
  {
    path: "addNewProduct",
    component: AddNewProductComponent,
    //
    data: { roles: ["Admin"] },
    resolve: {
      product: ProductResolveService,
    },
  },
  //RUTAS COMPLETAS SHOPING CARD
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "addNewProduct",
    component: AddNewProductComponent,
    
    data: { roles: ["Admin"] },
    resolve: {
      product: ProductResolveService,
    },
  },
  {
    path: "showProductDetails",
    component: ShowProductDetailsComponent,
    
    data: { roles: ["Admin"] },
  },
  {
    path: "orderInformation",
    component: OrderDetailsComponent,
    
    data: { roles: ["Admin"] },
  },
  {
    path: "productViewDetails",
    component: ProductViewDetailsComponent,
    resolve: { product: ProductResolveService },
  },
  {
    path: "buyProduct",
    component: BuyProductComponent,
    
    data: { roles: ["User"] },
    resolve: {
      productDetails: BuyProductResolverService,
    },
  },
  {
    path: "cart",
    component: CartComponent,
    
    data: { roles: ["User"] }
  },
  {
    path:"orderConfirm",
    component: OrderConfirmationComponent,
    
    data: { roles: ["User"] }
  },
  {
    path:"myOrders",
    component: MyOrdersComponent,
    
    data: { roles: ["User"] }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
