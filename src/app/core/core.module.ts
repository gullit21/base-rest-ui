import { AuthService } from './../seguranca/auth.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastaModule } from 'ngx-toasta';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { PessoaService } from './../pessoas/pessoa.service';
import { RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { Title } from '@angular/platform-browser';
import { MoneyHttp } from '../seguranca/money-http';
import { NaoAutorizadoComponent } from './nao-autorizado.component';

@NgModule({
    declarations: [NavbarComponent, PaginaNaoEncontradaComponent, NaoAutorizadoComponent],
    imports: [
        CommonModule,
        RouterModule,

        ToastaModule.forRoot(),
        ConfirmDialogModule
    ],
    exports: [
        NavbarComponent,
        ToastaModule,
        ConfirmDialogModule
    ],
    providers: [
        ErrorHandlerService,
        PessoaService,
        AuthService,
        MoneyHttp,

        ConfirmationService,
        Title,
        {
            provide: LOCALE_ID, useValue: 'pt-BR'
        }
    ]
})
export class CoreModule { }
