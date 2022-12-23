import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ServersService } from './servers/servers.service';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from './servers/server/server-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    NotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthGuardService, AuthService, CanDeactivateGuardService, ServerResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
