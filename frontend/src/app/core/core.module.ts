import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecommendationsModule } from '../recommendations/recommendations.module';
import { ApiService } from './services/api.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

const providers = [ApiService];

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, RecommendationsModule, HttpClientModule],
  exports: [FooterComponent, NavbarComponent],
  providers,
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers,
    };
  }
}
