import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'work-flow',
    pathMatch: 'full'
  },
  {
    path: 'work-flow',
    loadChildren: () => import('./features/flow/flow.module').then(m => m.FlowModule)
  },
  {
    path: '**',
    redirectTo: 'work-flow'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
