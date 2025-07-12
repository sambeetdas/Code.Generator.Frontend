import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'projects', component: ProjectListComponent, canActivate: [AuthGuard] },
  { path: 'projects/create', component: ProjectCreateComponent, canActivate: [AuthGuard] },
  { path: 'projects/:id', component: ProjectDetailComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/projects', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }