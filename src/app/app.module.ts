import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SkillsComponent } from './views/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ContactComponent } from './views/contact/contact.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    NavigationComponent,
    SkillsComponent,
    FooterComponent,
    PortfolioComponent,
    ContactComponent,
    PageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
