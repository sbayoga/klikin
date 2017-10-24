import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {CardComponent} from "./card/card.component";
@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule {
}
