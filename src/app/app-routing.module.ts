import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";

const appRoutes: Routes = [
    // Each route is just a javascript object in this array.
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      // Any users/1, or users/2 the ':id' is dynamic now.
      { path: ':id/:name', component: UserComponent },
    ] },
    // We can have nested routes using the 'children' property.
    // The child routes need a SEPARATE server-outlet!
    // to protect the children with canActivate, we can use a different hook now!
    { path: 'servers', 
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard], 
    component: ServersComponent, 
    children: [
      { path: ':id/edit', component: EditServerComponent },
      { path: ':id', component: ServerComponent },
    ] },
    {path: 'not-found', component: PageNotFoundComponent},
    // The ** route covers all routes other than the ones we defined! 
    {path: '**', redirectTo: '/not-found'}, 
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
// This module will encapsulate all our routes.
export class AppRoutingModule {
    

}