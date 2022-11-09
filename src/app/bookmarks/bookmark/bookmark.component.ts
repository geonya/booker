import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import {
  Bookmark,
  GetBookmarkGQL,
  GetLinksGQL,
  Link,
} from '../../../generated-types';
import { AddLinkComponent } from './add-link/add-link.component';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
  bookmark: Bookmark | undefined | null;
  links: Link[] | undefined | null;
  isLoading = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly getBookmarkGql: GetBookmarkGQL,
    private readonly dialog: MatDialog,
    private readonly getLinkGql: GetLinksGQL,
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.getBookmarkGql.watch({
            input: { id: +params['id'] },
          }).valueChanges;
        }),
      )
      .subscribe((result) => {
        this.bookmark = result.data.getBookmark.bookmark;
        this.isLoading = result.loading;
        this.links = result.data.getBookmark.bookmark?.links;
      });
  }
  onAdd() {
    this.dialog.open(AddLinkComponent, {
      data: { bookmark: this.bookmark },
    });
  }
  onLinkClick(url: string) {
    window.open(url, '_blank');
  }
}
