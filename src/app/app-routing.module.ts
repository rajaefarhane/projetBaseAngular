import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path:'about', component: AboutComponent},
  {path:'contacts', component: ContactsComponent},
  {path:'',
  redirectTo:'/about',
  pathMatch:'full'},
  {path:'gallery',component:GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AboutComponent,ContactsComponent]
