import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [MaterialModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<NgModule> {
    return {
      ngModule: SharedModule,
    };
  }
}

