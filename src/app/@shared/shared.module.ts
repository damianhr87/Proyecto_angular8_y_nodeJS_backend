import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatFormFieldModule, MatInputModule, MatCardModule,
  MatRadioModule, MatSelectModule, MatCheckboxModule, MatTableModule,
  MatMenuModule, MatDialogModule,
} from '@angular/material';

import { FilterBoxComponent } from './components/filter-box/filter-box.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    FilterBoxComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  exports: [
    // Angular Material
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,

    // nuestros componentes
    FilterBoxComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule {}
