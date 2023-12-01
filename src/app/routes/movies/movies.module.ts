import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [MoviesComponent, WatchListComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule
  ]
})
export class MoviesModule { }
