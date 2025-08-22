import { type RouteConfig, route ,layout } from "@react-router/dev/routes";
// https://github.com/adrianhajdin/travel-agency-dashboard/tree/main/components



export default [
  layout( "routes/Admin/admin-layout.tsx",
    [
        route( 'dashboard', 'routes/Admin/dashboard.tsx'),
        route( 'all-users', 'routes/Admin/all-users.tsx')

    ] ),  
  
] satisfies RouteConfig;


 