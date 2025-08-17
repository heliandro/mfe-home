import { Routes } from '@angular/router';
import { MicroFrontendService } from './micro-frontend.service';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'xpto',
        loadChildren: () => {
        const microFrontendService = new MicroFrontendService();
        return microFrontendService.loadRemoteModule(4201, 'mfe-produtos')
            .then(m => m.ProdutosModule);
        }
  },
];
