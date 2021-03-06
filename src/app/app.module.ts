import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConwaysGameOfLifeComponent } from './conways-game-of-life/conways-game-of-life.component';
import { MatSliderModule } from "@angular/material/slider"
import { MatMenuModule } from "@angular/material/menu"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { QuickSortComponent } from './sorting/quick-sort/quick-sort.component';
import { BubbleSortComponent } from './sorting/bubble-sort/bubble-sort.component';
import { SelectionSortComponent } from './sorting/selection-sort/selection-sort.component'
import { TimingService } from './services/timing-service.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { EmailService } from './services/email.service';
import { HttpClientModule } from '@angular/common/http'
import { fb } from './config';
import { NotFoundComponent } from './not-found/not-found.component';
import { DijkstraComponent } from './pathFinding/dijkstra/dijkstra.component';
import { DoublePendulumComponent } from './physics/double-pendulum/double-pendulum.component';
import { FourierComponent } from './math/fourier/fourier.component';
import { InsertionSortComponent } from './sorting/insertion-sort/insertion-sort.component';


@NgModule({
  declarations: [
    AppComponent,
    ConwaysGameOfLifeComponent,
    NavbarComponent,
    HomeComponent,
    QuickSortComponent,
    BubbleSortComponent,
    SelectionSortComponent,
    NotFoundComponent,
    DijkstraComponent,
    DoublePendulumComponent,
    FourierComponent,
    InsertionSortComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(fb.firebase),
    AngularFireModule,
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [
    TimingService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
