import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GiveComponent } from './components/give/give.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GroupChatComponent } from './components/group-chat/group-chat.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SeatsComponent } from './components/home/seats/seats.component';
import { SermonComponent } from './components/home/sermon/sermon.component';
import { AnnouncementsComponent } from './components/home/announcements/announcements.component';
import { ConnectedComponent } from './components/home/connected/connected.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'give', component: GiveComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    GiveComponent,
    AboutUsComponent,
    GroupChatComponent,
    LoginComponent,
    RegisterComponent,
    SeatsComponent,
    SermonComponent,
    AnnouncementsComponent,
    ConnectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
