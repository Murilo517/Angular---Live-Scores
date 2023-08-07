import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { MyApiService } from "src/app/services/my-api.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private apiService: MyApiService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  formLogin!: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formLogin = this.formBuilder.group({
      user: ['',Validators.required],
      password: ['',Validators.required],
    });
  }

  login() {
    if (this.formLogin.valid) {
      const loginData = {
        user: this.formLogin.value.user,
        password: this.formLogin.value.password,
      };
      this.apiService.makelogin(loginData);
    }
  }
}
