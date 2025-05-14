import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'notification',
    data: { pageTitle: 'infinityShoppingNotificationApp.infinityShoppingNotificationAppNotification.home.title' },
    loadChildren: () => import('./InfinityShoppingNotificationApp/notification/notification.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
