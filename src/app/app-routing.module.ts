import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './root/root.module#RootModule' },
  { path: 'guide', loadChildren: './guide/guide.module#GuideModule' },
  { path: 'team', loadChildren: './team/team.module#TeamModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
