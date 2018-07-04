import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ROOT_DIRECTIVE_INDICES } from '@angular/core/src/render3/instructions';
import { LaunchpadComponent } from './launchpad/launchpad.component';

const routes: Routes = [
  {path: 'launchpads' , component: LaunchpadComponent}
]

@NgModule({
  
  exports: [ RouterModule ], 

  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
