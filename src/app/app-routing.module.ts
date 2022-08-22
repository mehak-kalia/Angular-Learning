import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { PhatakComponent } from './phatak/phatak.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact-us', component: ContactusComponent},
  {path: 'gallary', component: GallaryComponent},
  {path: 'phatak', component: PhatakComponent},
  {path: '**', redirectTo: 'phatak'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
