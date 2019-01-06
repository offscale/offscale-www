import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule, MatCardModule } from '@angular/material';

import { TeamComponent } from './team.component';
import { teamRoutes } from './team.routes';


@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(teamRoutes),
    FlexLayoutModule,
    MatCardModule, MatButtonModule
  ]
})
export class TeamModule {}
