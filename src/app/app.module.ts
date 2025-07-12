import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectDeployComponent } from './projects/project-deploy/project-deploy.component';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProjectService } from './projects/project.service';

// Import our new component
import { MermaidComponent } from './shared/mermaid/mermaid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProjectListComponent,
    ProjectCreateComponent,
    ProjectDetailComponent,
    ProjectDeployComponent,
    MermaidComponent // <-- Add our new component here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // NgxMermaidModule is no longer needed
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }