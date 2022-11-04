import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { concatMap } from 'rxjs'
import { CreateUserGQL } from '../../../generated-types'
import { LoginService } from '../login/login.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private readonly createUserGql: CreateUserGQL,
    private readonly loginService: LoginService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {}

  signUp({ email, password }: any) {
    this.createUserGql
      .mutate({ input: { email, password } })
      .pipe(
        concatMap(() => {
          return this.loginService.login({ email, password })
        }),
      )
      .subscribe(() => {
        this.router.navigate(['/'])
      })
  }
}
