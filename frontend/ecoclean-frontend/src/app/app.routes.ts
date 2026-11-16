import { Routes } from '@angular/router';
import { Home } from './homepage/homepage';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Citizen } from './pages/register/citizen/citizen';
import { Collector } from './pages/register/collector/collector';
import { Organization } from './pages/register/organization/organization';
export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'services',component:Services},
    {path:'contact',component:Contact},
    {path:'register',component:Register},
    {path:'register/citizen',component:Citizen},
    {path:'register/collector',component:Collector},
    { path: 'register/organization', component: Organization },

    {path:'login',component:Login}
    
    
];
