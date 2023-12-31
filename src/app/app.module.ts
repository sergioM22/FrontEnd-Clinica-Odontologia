import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { ViewExamenesComponent } from './pages/admin/view-examenes/view-examenes.component';
import { AddExamenComponent } from './pages/admin/add-examen/add-examen.component';
import { ActualizarExamenComponent } from './pages/admin/actualizar-examen/actualizar-examen.component';
import { ViewExamenPreguntasComponent } from './pages/admin/view-examen-preguntas/view-examen-preguntas.component';
import { AddPreguntaComponent } from './pages/admin/add-pregunta/add-pregunta.component';
import { ActualizarPreguntaComponent } from './pages/admin/actualizar-pregunta/actualizar-pregunta.component';
import { SidebarComponent as UserSidebar} from './pages/user/sidebar/sidebar.component';
import { LoadExamenComponent } from './pages/user/load-examen/load-examen.component';
import { InstruccionesComponent } from './pages/user/instrucciones/instrucciones.component';
import { StartComponent } from './pages/user/start/start.component';
import { NgxUiLoaderModule , NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { CitaComponent } from './pages/user/cita/cita.component';
import {MatTableModule} from '@angular/material/table';
import { ConfirmDialogComponent } from './pages/user/cita/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CitaModalComponent } from './pages/user/cita/cita-modal/cita-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

//chat
 import { ChatComponent } from './pages/chat/chat.component';
import { LoadCliComponent } from './pages/user_cli/load-cli/load-cli.component';
import { UserDashboardCliComponent } from './pages/user_cli/user-dashboard-cli/user-dashboard-cli.component';
import { WelcomeCliComponent } from './pages/user_cli/welcome-cli/welcome-cli.component';
import { SidebarCliComponent } from './pages/user_cli/sidebar-cli/sidebar-cli.component';
import { ProfileCliComponent } from './pages/user_cli/profile-cli/profile-cli.component';
import { CitaCliComponent } from './pages/user_cli/cita-cli/cita-cli.component';
import { CitaCliDialogComponent } from './pages/user_cli/cita-cli/cita-cli-dialog/cita-cli-dialog.component';
import { CitaCliModalComponent } from './pages/user_cli/cita-cli/cita-cli-modal/cita-cli-modal.component';

// import { UserComponent } from './pages/Chat/user/user.component';
// import { MainComponent } from './pages/Chat/main/main.component';

//cart
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponentCard } from './Cart/home/home.component';
import { HeaderComponent } from './Cart/header/header.component';
import { ShowProductImagesDialogComponent } from './Cart/show-product-images-dialog/show-product-images-dialog.component';
import { ShowProductDetailsComponent } from './Cart/show-product-details/show-product-details.component';
import { ProductViewDetailsComponent } from './Cart/product-view-details/product-view-details.component';
import { OrderDetailsComponent } from './Cart/order-details/order-details.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { OrderConfirmationComponent } from './Cart/order-confirmation/order-confirmation.component';
import { MyOrdersComponent } from './Cart/my-orders/my-orders.component';
import { ForbiddenComponent } from './Cart/forbidden/forbidden.component';
import { CartComponent } from './Cart/cart/cart.component';
import { BuyProductComponent } from './Cart/buy-product/buy-product.component';
import { AddNewProductComponent } from './Cart/add-new-product/add-new-product.component';

import { MatMenuModule } from '@angular/material/menu';
import { CitaComponentEspera } from './pages/user/citaEspera/cita.espera.component';
import { CitaEsperaModalComponent } from './pages/user/citaEspera/cita-modal/cita-espera-modal.component';
import { ConfirmDialogEsperaComponent } from './pages/user/citaEspera/confirm-dialog/confirm-dialog-espera.component';
import { CitaCompletadoComponent } from './pages/user/citaCompletado/cita.completado.component';
import { CitaCompletadoModalComponent } from './pages/user/citaCompletado/cita-modal/cita-completado-modal.component';
import { CompletadoConfirmDialogComponent } from './pages/user/citaCompletado/confirm-dialog/completado-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    //Cart
    HomeComponentCard,
    CitaCompletadoComponent,
    CitaCompletadoModalComponent,
    CompletadoConfirmDialogComponent,
    HeaderComponent,
    ShowProductImagesDialogComponent,
    ShowProductDetailsComponent,
    ProductViewDetailsComponent,
    OrderDetailsComponent,
    ConfirmDialogEsperaComponent,
    CitaEsperaModalComponent,
    OrderConfirmationComponent,
    MyOrdersComponent,
    ForbiddenComponent,
    CartComponent,
    BuyProductComponent,
    AddNewProductComponent,
    CitaComponentEspera,
    // UserComponent,
    // MainComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriasComponent,
    AddCategoriaComponent,
    ViewExamenesComponent,
    AddExamenComponent,
    ActualizarExamenComponent,
    ViewExamenPreguntasComponent,
    AddPreguntaComponent,
    ActualizarPreguntaComponent,
    UserSidebar,
    LoadExamenComponent,
    InstruccionesComponent,
    StartComponent,
    CitaComponent,
    ConfirmDialogComponent,
    CitaModalComponent,

    LoadCliComponent,
    UserDashboardCliComponent,
    WelcomeCliComponent,

    SidebarCliComponent,
    ProfileCliComponent,
    CitaCliComponent,
    CitaCliDialogComponent,

    CitaCliModalComponent,

  ],
  imports: [
    MatGridListModule,
    MatButtonToggleModule,
    MatMenuModule,

    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
