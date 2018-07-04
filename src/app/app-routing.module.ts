import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ROOT_DIRECTIVE_INDICES } from '@angular/core/src/render3/instructions';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'launchpads' , component: LaunchpadComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]

@NgModule({
  
  exports: [ RouterModule ], 

  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
