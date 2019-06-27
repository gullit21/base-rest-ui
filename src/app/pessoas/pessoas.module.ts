import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';

import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
        PessoasPesquisaComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,

        InputMaskModule,
        TableModule,
        TooltipModule,
        InputTextModule,
        ButtonModule,

        SharedModule
    ],
    exports: []
})
export class PessoasModule { }
