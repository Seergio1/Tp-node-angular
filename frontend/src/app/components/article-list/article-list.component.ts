import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {
  articles: any[] = [];
  newArticle = { title: '', content: '' }; // Nouvel article à ajouter
  constructor(private articleService: ArticleService) { }
  ngOnInit(): void {
    this.loadArticles();
  }
  loadArticles(): void {
    this.articleService.getArticles().subscribe(data => this.articles =
      data);
  }
  addArticle(): void {
    if (this.newArticle.title && this.newArticle.content) {
      this.articleService.addArticle(this.newArticle).subscribe(() => {
        this.loadArticles();
        this.newArticle = { title: '', content: '' };
      });
    }
  }
  deleteArticle(id: string): void {
    this.articleService.deleteArticle(id).subscribe(() =>
      this.loadArticles());
  }
}
