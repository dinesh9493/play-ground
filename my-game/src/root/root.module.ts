import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootRoutingModule } from './root-routing.module';
import { RootContainerComponent } from './root-container/root-container.component';

@NgModule({
  declarations: [RootContainerComponent],
  imports: [BrowserModule, RootRoutingModule],
  bootstrap: [RootContainerComponent],
})
export class RootModule {}
