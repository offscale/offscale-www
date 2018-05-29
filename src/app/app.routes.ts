import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {path: '', loadChildren: './slash/slash.module#SlashModule'},
  {path: 'docs/getting-started', loadChildren: './getting-started/getting-started.module#GettingStartedModule'}
];
