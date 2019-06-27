import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { PessoaService, PessoaFiltro } from './../pessoa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastaService } from 'ngx-toasta';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-pessoas-pesquisa',
    templateUrl: './pessoas-pesquisa.component.html',
    styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

    totalRegistros = 0;
    filtro = new PessoaFiltro();
    pessoas = [];
    @ViewChild('tabela') grid;

    constructor(
        private pessoaSerivce: PessoaService,
        private toastaService: ToastaService,
        private confirmationService: ConfirmationService,
        private errorHandlerService: ErrorHandlerService,
        private title: Title
    ) { }

    ngOnInit(): void {
        this.pesquisar();
        this.title.setTitle('Pesquisa de pessoas');
    }

    pesquisar(pagina = 0) {

      this.pessoaSerivce.pesquisar(this.filtro).subscribe(
          response => {
            this.pessoas = response;
          }
      );
  }


}
