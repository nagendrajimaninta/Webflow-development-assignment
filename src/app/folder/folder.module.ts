import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReversePipe } from '../reverse.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    MatCardModule,
    MatPaginatorModule,
    FolderPageRoutingModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [FolderPage, SignupDialogComponent],
  exports: [],
  providers:[ReversePipe]
})
export class FolderPageModule { }
