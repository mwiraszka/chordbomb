import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';

import { environment } from '../environments/environment';
import { appRoutingModule } from './app.routing';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SongManagerComponent } from './song-manager/song-manager.component';
import { SongEditComponent } from './song-manager/song-edit/song-edit.component';
import { SongListComponent } from './song-manager/song-list/song-list.component';
import { SongSearchComponent } from './song-search/song-search.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SongSearchComponent,
    SongManagerComponent,
    SongEditComponent,
    SongListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSidenavModule,
    appRoutingModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
