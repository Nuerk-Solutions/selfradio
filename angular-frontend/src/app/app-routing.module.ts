import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListenComponent } from "./listen/listen.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listen',
    pathMatch: 'full'
  },
  {
    path: 'listen',
    component: ListenComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
