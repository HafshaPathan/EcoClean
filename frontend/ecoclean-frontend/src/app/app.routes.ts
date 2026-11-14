import { Routes } from '@angular/router';
import { Home } from './homepage/homepage';
import { About } from './about/about';
export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    
];
