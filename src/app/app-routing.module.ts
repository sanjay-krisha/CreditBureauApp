import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
      
      { path: 'home', component: HomeComponent },
      { path: 'config', component: ConfigurationComponent },
      { path: 'admin', component: AdminComponent },
      { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

