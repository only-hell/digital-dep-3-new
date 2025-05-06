import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowNameComponent } from './show-name/show-name.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'show-name/:name', component: ShowNameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
