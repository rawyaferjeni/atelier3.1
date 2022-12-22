import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ConvertisseurComponentComponent } from './convertisseur-component/convertisseur-component.component';
import { ToEuroConvertComponentComponent } from './to-euro-convert-component/to-euro-convert-component.component';
import { ActorComponentComponent } from './actor-component/actor-component.component';
import { ActorsComponentComponent } from './actors-component/actors-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ConvertisseurComponentComponent,
    ToEuroConvertComponentComponent,
    ActorComponentComponent,
    ActorsComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
