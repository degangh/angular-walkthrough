import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { FormsModule} from '@angular/forms';
import { PadDetailComponent } from './pad-detail/pad-detail.component';
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LaunchpadComponent,
    PadDetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
