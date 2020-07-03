import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";

import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { LoginComponent } from "../../pages/login/login.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "login", component: LoginComponent },
  // { path: "rtl", component: RtlComponent }
];
