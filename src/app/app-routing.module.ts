import { formatCurrency } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'portfolio/:id', component:PortfolioComponent, canActivate:[GuardGuard]},
  {path:'portfolio', component:PortfolioComponent, canActivate:[GuardGuard]},
  {path:'login-form', component:LoginFormComponent},
  {path:'', redirectTo:'login-form', pathMatch:'full'},
  {path:'add', component:AddComponent},
  {path:'edit/:id', component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
