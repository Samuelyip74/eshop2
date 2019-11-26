import { Home } from '@material-ui/icons';
import DashboardPage from './Dashboard';
import PromotionPage from './Promotion';

const Routes = [
  {
    path: '/app/dashboard',
    sidebarName: 'Home',
    navbarName: 'Home',
    icon: Home,
    component: DashboardPage
  },
  {
    path: '/app/promotion',
    sidebarName: 'Promotion',
    navbarName: 'Promotion',
    icon: Home,
    component: PromotionPage
  }
];

export default Routes;