import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import {
  CreateBookmarkGQL,
  GetBookmarksDocument,
} from '../../../generated-types'

@Component({
  selector: 'app-create-bookmark',
  templateUrl: './create-bookmark.component.html',
  styleUrls: ['./create-bookmark.component.scss'],
})
export class CreateBookmarkComponent implements OnInit {
  bookmarkName = new FormControl('', [Validators.required])

  constructor(
    private readonly createBookmarkGql: CreateBookmarkGQL,
    private readonly dialogRef: MatDialogRef<CreateBookmarkComponent>,
  ) {}

  ngOnInit(): void {}

  getBookmarkNameError() {
    if (this.bookmarkName.hasError('required')) {
      return '제목을 입력해주세요'
    } else return ''
  }

  createBookmark() {
    this.createBookmarkGql
      .mutate(
        {
          input: {
            name: this.bookmarkName.value!,
          },
        },
        {
          refetchQueries: [
            {
              query: GetBookmarksDocument,
            },
          ],
        },
      )
      .subscribe(() => {
        this.dialogRef.close()
      })
  }
}
