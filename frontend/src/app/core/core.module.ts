import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { RecommendationsModule } from '../recommendations/recommendations.module';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, RecommendationsModule],
  exports: [
    FooterComponent,
    HeaderComponent,
  ],
})
export class CoreModule {}
