import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// service
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {

public formAuth: FormGroup = this.formBuilder.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['',[Validators.required]],
});

public msgerror!: string

constructor(private formBuilder: FormBuilder,private authService:AuthService){}

ngOnInit(): void {

}

public submitForm(){
  if(this.formAuth.valid){
    this.authService.sign({
      email: this.formAuth.value.email,
      password: this.formAuth.value.password,
    }).subscribe({
      next: (res) => res,
      error: (e) => (this.msgerror = e),
    })
  }
}

}
