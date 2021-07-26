import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [ 
  { path: 'index', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [IndexComponent, AboutComponent, WorkComponent, ContactComponent];
