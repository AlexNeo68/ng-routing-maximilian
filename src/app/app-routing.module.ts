import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolverService } from './servers/server/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';



const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent
      },
    ]
  },
  {
    path: 'servers',
    component: ServersComponent,
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: { server: ServerResolverService }
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuardService]
      },
    ]
  },

  {
    path: 'not-found',
    data: { message: 'Page not Found!' },
    component: ErrorPageComponent
  },
  // {
  //   path: 'not-found',
  //   component: NotFoundComponent
  // },
  {
    path: '**',
    redirectTo: 'not-found',

  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
      // useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
