import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransitionGroupComponent, TransitionGroupItemDirective } from './directives/transition-group';
import { HomeComponent } from './home/home.component';
import { InMemHeroService } from './in-memory-web-api/InMemoryDataService.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransitionGroupComponent,
    TransitionGroupItemDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

