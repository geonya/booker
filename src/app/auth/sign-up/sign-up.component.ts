import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { concatMap } from 'rxjs'
import { CreateUserGQL, CreateUserInput } from '../../../generated-types'
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

  signUp(createUserInput: CreateUserInput) {
    this.createUserGql
      .mutate({ input: createUserInput })
      .pipe(
        concatMap(() => {
          return this.loginService.login(createUserInput)
        }),
      )
      .subscribe(() => {
        this.router.navigate(['/'])
      })
  }
}
