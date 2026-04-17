
# Instalação

Após o CLI, fica a versão desejada.

```npm install -g @angular/cli@16```

## Criar Projeto

```ng new NomeProjeto```

## Extensões Recomendadas

1. Angular Snippets
2. Angular Language Service

## New App

1. ```ng new app-name```
2. ```npm start```

## New Component

Geral
``` ng generate component components/component-name ```

Páginas
``` ng g c features/main-page/sub-page ```

Compartilhados
``` ng g c shared/nav ```

## Iniciar Projeto

Excluir tudo menos a ultima linha do app.component.html

```<router-outlet></router-outlet>```

# Routes
Em app-routing-module.ts

```
const routes: Routes = [
  {path: "", component:MainPageComponent, children: [
    {path: "mercado", component:MercadoPageComponent},
    {path: "comida", component:ComidaPageComponent}
  ]},
  {path: "login", component:LoginPageComponent},
  {path: "**", component:NotFoundPageComponent}
];
```

# Zerar CSS
styles.css

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}