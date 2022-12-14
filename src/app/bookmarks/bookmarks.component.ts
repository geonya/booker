import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Bookmark, GetBookmarksGQL } from '../../generated-types';
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent implements OnInit {
  bookmarks$: Observable<Bookmark[] | undefined | null>;
  constructor(
    private readonly dialog: MatDialog,
    private readonly getBookmarksGql: GetBookmarksGQL,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.bookmarks$ = this.getBookmarksGql
      .watch()
      .valueChanges.pipe(map((result) => result.data.getBookmarks.bookmarks));
  }

  onFabClick() {
    this.dialog.open(CreateBookmarkComponent);
  }
  onBookmarkClick(id: number) {
    this.router.navigate(['/bookmarks', id]);
  }
}
