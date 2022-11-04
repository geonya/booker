import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  @Output() onSubmitEvent = new EventEmitter<any>()
  @Input() submitLabel: string

  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(16),
  ])

  constructor() {}

  ngOnInit(): void {}

  getEmailErrorMessage(): string {
    if (this.email.hasError('required')) return '이메일을 입력해주세요'
    if (this.email.hasError('email')) return '잘못된 이메일입니다.'
    return ''
  }
  getPasswordErrorMessage(): string {
    if (this.password.hasError('required')) return '비밀번호을 입력해주세요'
    return ''
  }
  onSubmit() {
    this.onSubmitEvent.emit({
      email: this.email.value,
      password: this.password.value,
    })
  }
}
