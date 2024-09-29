import { createRootRoute, createRoute } from '@tanstack/react-router';
import Root from '../src/components/root'; // Ensure Root is capitalized
import Home from './pages/Home';
import About from './pages/About';
import AboutDetails from './components/AboutOptions';
import Dashboard from './components/Dashboard';
import AdminLogin from './pages/AdminLogin';
import HomeOptions from './components/HomeOptions';
import Services from './pages/Services';
import ServiceOptions from './components/ServiceOptions';
import Contacts from './components/Contacts';
import Contactsiteams from './components/Contactsiteams';
import GetanEstimate from './components/GetanEstimate';
import GetanEstimateIteams from './components/GetanEstimateIteams';

// Define the root route
const rootRoute = createRootRoute({
  component: Root, // Root component for the entire application
});

// Define the child routes
const AdminLoginRoute = createRoute({
  getParentRoute: () => rootRoute, // Root as the parent
  path: '/Admin', // Path for the admin login page
  component: AdminLogin,
});

const DashboardRoute = createRoute({
  getParentRoute: () => rootRoute, // Root as the parent (not AdminLogin)
  path: '/Admin/Dashboard', // Path for the dashboard
  component: Dashboard,
});

const Dashboard_HomeRoute = createRoute({
  getParentRoute: () => DashboardRoute, // DashboardRoute as parent
  path: '/Home', // Path for the dashboard home page
  component: Home,
});
const Dashboard_Homeiteams = createRoute({
  getParentRoute: () => DashboardRoute,
  path: '/homeoptions',
  component: HomeOptions,
});

const Dashboard_aboutRoute = createRoute({
  getParentRoute: () => DashboardRoute, // DashboardRoute as parent
  path: '/About', // Path for the dashboard home page
  component: About,
});

// Define the nested route for AboutDetails
const Dashboard_aboutItemsRoute = createRoute({
  getParentRoute: () => Dashboard_aboutRoute, // aboutRoute as the parent
  path: '/aboutoptions', // Nested path under /about
  component: AboutDetails,
});

const Dashboard_ServicesRoute = createRoute({
  getParentRoute: () => DashboardRoute, // DashboardRoute as parent
  path: '/Services', // Path for the dashboard home page
  component: Services,
});

const Dashboard_Serviceiteams = createRoute({
  getParentRoute: () => Dashboard_ServicesRoute,
  path: '/ServiceIteams',
  component: ServiceOptions,
});

const Dashboard_Contacts = createRoute({
  getParentRoute: () => DashboardRoute, // DashboardRoute as parent
  path: '/Contacts', // Path for the dashboard home page
  component: Contacts,
});
const Dashboard_Contactsiteams = createRoute({
  getParentRoute: () => Dashboard_Contacts, // DashboardRoute as parent
  path: '/ContactsIteams', // Path for the dashboard home page
  component: Contactsiteams,
});
const Dashboard_GetanEstimate = createRoute({
  getParentRoute: () => DashboardRoute,
  path: '/GetanEstimate', // Path for the dashboard home page
  component: GetanEstimate,
});
const Dashboard_GetanEstimateIteams = createRoute({
  getParentRoute: () => Dashboard_GetanEstimate,
  path: '/GetanEstimateiteams', // Path for the dashboard home page
  component: GetanEstimateIteams,
});

// Add child routes to the rootRoute
Dashboard_GetanEstimate.addChildren([Dashboard_GetanEstimateIteams]);
Dashboard_Contacts.addChildren([Dashboard_Contactsiteams]);
Dashboard_ServicesRoute.addChildren([Dashboard_Serviceiteams]);
Dashboard_aboutRoute.addChildren([Dashboard_aboutItemsRoute]);
Dashboard_HomeRoute.addChildren([Dashboard_Homeiteams]);
DashboardRoute.addChildren([
  Dashboard_HomeRoute,
  Dashboard_aboutRoute,
  Dashboard_ServicesRoute,
  Dashboard_Contacts,
  Dashboard_GetanEstimate,
]);
rootRoute.addChildren([AdminLoginRoute, DashboardRoute]);

// Export the complete route tree
export const routeTree = rootRoute;
