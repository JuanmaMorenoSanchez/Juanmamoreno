import { Component, inject } from '@angular/core';
import { CANVASES } from '@constants/canvas.constants';
import { Canvas } from '@models/canvas.models';
import { TranslateService } from '@ngx-translate/core';
import { ResponsiveService } from '@services/responsive.service';
import { SessionQuery } from '@store/session.query';

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.scss'],
    standalone: false
})
export class TopMenuComponent {
  private sessionQuery = inject(SessionQuery);
  private responsiveService = inject(ResponsiveService);
  private translateService = inject(TranslateService);

  public mobileMenu = true;
  public mobileMenuOpen = true;

  constructor( ) { 
    this.responsiveService.displayMobileLayout.subscribe(display => this.mobileMenu = display);
  }

  get generativePieces(): Array<Canvas> {
    return CANVASES
  }

  get years(): Set<number> {
    return this.sessionQuery.years;
  }

  get currentLang(): string {
    return this.translateService.currentLang || this.translateService.getDefaultLang();
  }

  public toggleSidebarDisplay(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  public changeLanguage(): void {
    const nextLang = this.currentLang === "en-EN" ? "es-ES" : "en-EN";
    this.translateService.use(nextLang);
  }

}
