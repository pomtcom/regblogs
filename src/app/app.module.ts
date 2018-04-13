import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
// import {HomeComponent} from './home/home.component';
import {BlogsComponent} from './blogs/blogs.component';
import {PreviewComponent} from './preview/preview.component';
import {HomenewComponent} from './homenew/homenew.component';
import {BackendService} from '../service/backend/backend.service';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CarwashcoinacceptComponent } from './carwashcoinaccept/carwashcoinaccept.component';
import { CarwashcoinacceptenglishComponent } from './carwashcoinacceptenglish/carwashcoinacceptenglish.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  // { path: 'blogs', component: BlogsComponent},
  {path: 'preview', component: PreviewComponent},
  {path: 'home', component: HomenewComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'blogs/:id', component: BlogsComponent},
  {path: 'carwash-coinaccept-th', component: CarwashcoinacceptComponent},
  {path: 'carwash-coinaccept-en', component: CarwashcoinacceptenglishComponent}
];

export function init_app(appLoadService: BackendService) {
  return () => appLoadService.initializeApp();
}

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    BlogsComponent,
    PreviewComponent,
    HomenewComponent,
    AboutmeComponent,
    CarwashcoinacceptComponent,
    CarwashcoinacceptenglishComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [
    BackendService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [BackendService], multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
