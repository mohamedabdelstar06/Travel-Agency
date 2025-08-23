import { type RouteConfig, route ,layout } from "@react-router/dev/routes";
// https://github.com/adrianhajdin/travel-agency-dashboard/tree/main/components
//https://jsmastery.com/video-kit/3dc764b0-6ee8-458a-a023-c1770039aa46


export default [
  layout( "routes/Admin/admin-layout.tsx",
    [
        route( 'dashboard', 'routes/Admin/dashboard.tsx'),
        route( 'all-users', 'routes/Admin/all-users.tsx')

    ] ),  
  
] satisfies RouteConfig;


 