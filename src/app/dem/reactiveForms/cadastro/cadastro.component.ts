import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { comparaValidator } from 'src/app/validators/compara-validator';
import { CpfValidator } from 'src/app/validators/cpf-validator';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ]
})
export class CadastroComponent implements OnInit {

  cadastroForm !: FormGroup;
  usuario !: Usuario;
  formResult: string = '';

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
      { tipo: 'invalido', mensagem: 'CPF Inválido.' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
    ],
    senhaConfirmacao: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
      { tipo: 'comparacao', mensagem: 'Deve ser igual a Senha.' },
    ],
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, CpfValidator.cpfValido]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['',[Validators.required, Validators.minLength(6)]],
      senhaConfirmacao: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      // check senhas iguais
      validator: comparaValidator('senha', 'senhaConfirmacao')
    })
  }

  adicionarUsuario() {

    if(this.cadastroForm.dirty && this.cadastroForm.valid) {
          // mapeamento de um obj p/ o outro
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    }
    else {
      this.formResult = "Não submeteu!"
    }
  }

}
