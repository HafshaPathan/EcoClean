import { Routes } from '@angular/router';
import { Home } from './homepage/homepage';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { concat } from 'rxjs';
export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'services',component:Services},
     {path:'contact',component:Contact}
    
    
];
