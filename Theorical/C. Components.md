## Components no Angular (Angular 16)

**Components** são os principais blocos de construção de uma aplicação em **Angular**. Cada component representa uma **parte da interface (UI)** e controla sua lógica, dados e comportamento.

### Estrutura de um Component
Um component geralmente possui três partes principais:

- **Template (HTML):** define a estrutura visual da interface.
- **Class (TypeScript):** contém a lógica do component.
- **Styles (CSS/SCSS):** definem a aparência visual.

Normalmente os arquivos possuem o mesmo nome base:

- **`x.component.ts`** → lógica do component  
- **`x.component.html`** → estrutura da interface  
- **`x.component.css`** → estilos do component  
- **`x.component.spec.ts`** → testes

### Ligação do Template e CSS

O template e os estilos são definidos no decorator `@Component`:

```
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {}
```

Modules no Angular

No Angular 16, os components podem ser usados de duas formas.

1. Com NgModules (forma tradicional)

Os components precisam ser declarados dentro de um module, geralmente no app.module.ts.

```
@NgModule({
  declarations: [ExampleComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

2. Standalone Components (forma moderna)

Versões recentes do Angular permitem criar components standalone, que não precisam de module.

```
@Component({
  selector: 'app-example',
  standalone: true,
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {}
```

Características

São reutilizáveis em diferentes partes da aplicação.

Permitem organizar o código em partes menores.

Podem se comunicar entre si usando @Input() e @Output().

Os estilos de x.component.css normalmente afetam apenas aquele componente (encapsulamento de estilos).