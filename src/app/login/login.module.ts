import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [ LoginComponent ],
  exports: [
    LoginComponent,
    MatInputModule,
    MatFormFieldModule,
  ],
  entryComponents: [LoginComponent],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    // CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ]
})
export class LoginModule {}
