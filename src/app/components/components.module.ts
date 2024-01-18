import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule, CdkScrollableModule} from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginButtonComponent } from './login-button/login-button.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ArtPiecesListComponent } from './art-pieces-list/art-pieces-list.component';
import { ArtPieceComponent } from './art-piece/art-piece.component';
// import { Web3ModalModule, Web3ModalService } from '@mindsorg/web3modal-angular';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CanvasContainerComponent } from './canvas-container/canvas-container.component';
import { GenerativePieceComponent } from './generative-piece/generative-piece.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { GalleryModule } from 'ng-gallery';

@NgModule({
  declarations: [
    LoginButtonComponent,
    TopMenuComponent,
    ArtPiecesListComponent,
    ArtPieceComponent,
    CvComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    BreadcrumbComponent,
    CanvasContainerComponent,
    GenerativePieceComponent,
    ImageViewerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GalleryModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    // Web3ModalModule,
    ReactiveFormsModule,
    RouterModule,
    ScrollingModule,
    CdkScrollableModule
  ],
  providers: [
    // {
    //   provide: Web3ModalService,
    //   useFactory: () => new Web3ModalService({
    //     disableInjectedProvider: false,
    //     cacheProvider: true,
    //     providerOptions: {},
    //     network: "polygon"
    //   }),
    // },
  ],
  exports: [
    TopMenuComponent,
  ]
})
export class ComponentsModule { }
