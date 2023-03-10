import { Routes } from "@angular/router";
import { DataBindingComponent } from "./dem/data-binding/data-binding.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { ListaProdutosComponent } from "./produtos/lista-produtos/lista-produtos.component";
import {CadastroComponent} from "./dem/reactiveForms/cadastro/cadastro.component";

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'feature-data-binding', component: DataBindingComponent},
    {path: 'produtos', component: ListaProdutosComponent},
    {path: 'produto-detalhe/:id', component: ListaProdutosComponent},
    {path: 'cadastro', component: CadastroComponent},
];

