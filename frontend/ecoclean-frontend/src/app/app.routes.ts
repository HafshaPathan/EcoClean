import { Routes } from '@angular/router';
import { Home } from './homepage/homepage';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
 
export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'services',component:Services},
    {path:'contact',component:Contact},
    {path:'register',component:Register},
    {path:'login',component:Login}
    
    
];
