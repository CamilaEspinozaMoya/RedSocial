import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BotonMenuTComponent } from './boton-menu-t/boton-menu-t.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MuroComponent } from './muro/muro.component';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { MuroFormComponent } from './muro-form/muro-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MuroFeedComponent } from './muro-feed/muro-feed.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    BotonMenuTComponent,
    MuroComponent,
    ListaCategoriasComponent,
    AuthFormComponent,
    MuroFormComponent,
    MuroFeedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp (environment.firebase),
    AngularFireAuthModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonToggleModule,
    MatCardModule,
    MatListModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
