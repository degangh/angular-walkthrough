import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { FormsModule} from '@angular/forms';
import { PadDetailComponent } from './pad-detail/pad-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchpadComponent,
    PadDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
