import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  Bookmark,
  GetBookmarkDocument,
  UpdateBookmarkGQL,
} from '../../../../generated-types';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss'],
})
export class AddLinkComponent implements OnInit {
  url = new FormControl('', [Validators.required]);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private readonly data: { bookmark: Bookmark },
    private readonly dialog: MatDialogRef<AddLinkComponent>,
    private readonly updateBookmarkGql: UpdateBookmarkGQL,
  ) {}

  ngOnInit(): void {}

  getUrlError() {
    if (this.url.hasError('required')) {
      return '링크를 입력해주세요.';
    }
    return '';
  }

  addLink() {
    if (this.url.value === null) return;
    this.updateBookmarkGql
      .mutate(
        {
          input: {
            id: +this.data.bookmark.id,
            url: this.url.value,
          },
        },
        {
          refetchQueries: [
            {
              query: GetBookmarkDocument,
              variables: { input: { id: +this.data.bookmark.id } },
            },
          ],
        },
      )
      .subscribe(() => {
        this.dialog.close();
      });
  }
}
