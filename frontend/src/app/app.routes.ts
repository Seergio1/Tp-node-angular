import { Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';

export const routes: Routes = [
    {path: 'articles', component: ArticleListComponent}, //route pour article-list
    {path: '', redirectTo: 'articles', pathMatch: 'full'} //redirection
];
