# Standard Readme
# Leia-me padrão
# Léame predeterminado

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

A standard style for README files
Um estilo padrão para arquivos README
Un estilo predeterminado para archivos README

Your README file is normally the first entry point to your code. It should tell people why they should use your module, how they can install it, and how they can use it. Standardizing how you write your README makes creating and maintaining your READMEs easier. Great documentation takes work!
Seu arquivo README é normalmente o primeiro ponto de entrada para seu código. Ele deve dizer às pessoas por que elas devem usar seu módulo, como podem instalá-lo e como podem usá-lo. Padronizar como você escreve seu README facilita a criação e manutenção de seus READMEs. Ótima documentação dá trabalho!
Su archivo README suele ser el primer punto de entrada a su código. Debe decirle a la gente por qué deben usar su módulo, cómo pueden instalarlo y cómo pueden usarlo. Estandarizar la forma en que escribe su README facilita la creación y el mantenimiento de sus README. ¡La gran documentación requiere trabajo!

This repository contains:
Este repositório contém:
Este repositorio contiene:

1. [The specification](spec.md) for how a standard README should look.
2. A link to [a linter](https://github.com/RichardLitt/standard-readme-preset) you can use to keep your README maintained ([work in progress](https://github.com/RichardLitt/standard-readme/issues/5)).
3. A link to [a generator](https://github.com/RichardLitt/generator-standard-readme) you can use to create standard READMEs.
4. [A badge](#badge) to point to this spec.
5. [Examples of standard READMEs](example-readmes/) - such as this file you are reading.

Standard Readme is designed for open source libraries. Although it’s [historically](#background) made for Node and npm projects, it also applies to libraries in other languages and package managers.
Standard Readme é projetado para bibliotecas de código aberto. Embora seja [historicamente](#background) feito para projetos Node e npm, também se aplica a bibliotecas em outras linguagens e gerenciadores de pacotes.
Léame estándar está diseñado para bibliotecas de código abierto. Si bien [históricamente] (#background) está hecho para proyectos Node y npm, también se aplica a bibliotecas en otros idiomas y administradores de paquetes.

## Table of Contents
## Índice
## Índice

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
	- [Generator](#generator)
- [Badge](#badge)
- [Example Readmes](#example-readmes)
- [Related Efforts](#related-efforts)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Background
## Fundo
## Fondo

Standard Readme started with the issue originally posed by [@maxogden](https://github.com/maxogden) over at [feross/standard](https://github.com/feross/standard) in [this issue](https://github.com/feross/standard/issues/141), about whether or not a tool to standardize readmes would be useful. A lot of that discussion ended up in [zcei's standard-readme](https://github.com/zcei/standard-readme/issues/1) repository. While working on maintaining the [IPFS](https://github.com/ipfs) repositories, I needed a way to standardize Readmes across that organization. This specification started as a result of that.
Standard Readme começou com o problema originalmente colocado por [@maxogden](https://github.com/maxogden) em [feross/standard](https://github.com/feross/standard) em [este problema]( https://github.com/feross/standard/issues/141), sobre se uma ferramenta para padronizar readmes seria ou não útil. Muitas dessas discussões acabaram no repositório [zcei's standard-readme](https://github.com/zcei/standard-readme/issues/1). Enquanto trabalhava na manutenção dos repositórios [IPFS](https://github.com/ipfs), eu precisava de uma maneira de padronizar os Readmes em toda a organização. Esta especificação começou como resultado disso.
Léame estándar comenzó con el problema publicado originalmente por [@maxogden](https://github.com/maxogden) en [feross/standard](https://github.com/feross/standard) en [este problema]( https ://github.com/feross/standard/issues/141), sobre si sería útil o no una herramienta para estandarizar los archivos Léame. Muchas de estas discusiones terminaron en el repositorio [readme estándar de zcei] (https://github.com/zcei/standard-readme/issues/1). Mientras trabajaba en el mantenimiento de los repositorios [IPFS](https://github.com/ipfs), necesitaba una forma de estandarizar los archivos Léame en toda la organización. Esta especificación comenzó como resultado de eso.

> Your documentation is complete when someone can use your module without ever
having to look at its code. This is very important. This makes it possible for
you to separate your module's documented interface from its internal
implementation (guts). This is good because it means that you are free to
change the module's internals as long as the interface remains the same.


> Remember: the documentation, not the code, defines what a module does.

~ [Ken Williams, Perl Hackers](http://mathforum.org/ken/perl_modules.html#document)

Writing READMEs is way too hard, and keeping them maintained is difficult. By offloading this process - making writing easier, making editing easier, making it clear whether or not an edit is up to spec or not - you can spend less time worrying about whether or not your initial documentation is good, and spend more time writing and using code.
Escrever READMEs é muito difícil e mantê-los mantidos é difícil. Descarregando esse processo - tornando a escrita mais fácil, tornando a edição mais fácil, deixando claro se uma edição está de acordo com as especificações ou não - você pode gastar menos tempo se preocupando se sua documentação inicial é boa ou não, e gastar mais tempo escrevendo e usando código.
Escribir archivos README es muy difícil y mantenerlos actualizados es difícil. Al descargar este proceso (facilitar la escritura, la edición y dejar en claro si una edición está a la altura de las especificaciones o no), puede pasar menos tiempo preocupándose por si su documentación inicial es buena o no, y dedicar más tiempo a escribir y usar el código. .

By having a standard, users can spend less time searching for the information they want. They can also build tools to gather search terms from descriptions, to automatically run example code, to check licensing, and so on.
Por ter um padrão, os usuários podem gastar menos tempo procurando as informações que desejam. Eles também podem criar ferramentas para coletar termos de pesquisa de descrições, para executar automaticamente o código de exemplo, para verificar o licenciamento e assim por diante.
Al tener un patrón, los usuarios pueden dedicar menos tiempo a buscar la información que desean. También pueden crear herramientas para recopilar términos de búsqueda a partir de descripciones, ejecutar automáticamente código de muestra, verificar licencias, etc.

The goals for this repository are:
Os objetivos para este repositório são:
Los objetivos de este repositorio son:

1. A well defined **specification**. This can be found in the [Spec document](spec.md). It is a constant work in progress; please open issues to discuss changes.
2. **An example README**. This Readme is fully standard-readme compliant, and there are more examples in the `example-readmes` folder.
3. A **linter** that can be used to look at errors in a given Readme. Please refer to the [tracking issue](https://github.com/RichardLitt/standard-readme/issues/5).
4. A **generator** that can be used to quickly scaffold out new READMEs. See [generator-standard-readme](https://github.com/RichardLitt/generator-standard-readme).
5. A **compliant badge** for users. See [the badge](#badge).

## Install
## Instalar
## Instalar

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.
Este projeto usa [node](http://nodejs.org) e [npm](https://npmjs.com). Vá vê-los se você não os tiver instalado localmente.
Este proyecto usa [node](http://nodejs.org) y [npm](https://npmjs.com). Vaya a verlos si no los tiene instalados localmente.

```sh
$ npm install --global standard-readme-spec
```

## Usage
## Uso
## Uso

This is only a documentation package. You can print out [spec.md](spec.md) to your console:
Este é apenas um pacote de documentação. Você pode imprimir [spec.md](spec.md) no seu console:
Esto es solo un paquete de documentación. Puede imprimir [spec.md](spec.md) desde su consola:

```sh
$ standard-readme-spec
# Prints out the standard-readme spec
```

### Generator
### Gerador
### Generador

To use the generator, look at [generator-standard-readme](https://github.com/RichardLitt/generator-standard-readme). There is a global executable to run the generator in that package, aliased as `standard-readme`.
Para usar o gerador, veja [generator-standard-readme](https://github.com/RichardLitt/generator-standard-readme). Existe um executável global para executar o gerador nesse pacote, conhecido como `standard-readme`.
Para usar el generador, consulte [generator-standard-readme](https://github.com/RichardLitt/generator-standard-readme). Hay un ejecutable global para ejecutar el generador en este paquete, conocido como `standard-readme`.

## Badge
## Distintivo
## Placa

If your README is compliant with Standard-Readme and you're on GitHub, it would be great if you could add the badge. This allows people to link back to this Spec, and helps adoption of the README. The badge is **not required**.
Se o seu README for compatível com o Standard-Readme e você estiver no GitHub, seria ótimo se você pudesse adicionar o selo. Isso permite que as pessoas acessem esta especificação e ajuda na adoção do README. O distintivo **não é obrigatório**.
Si su LÉAME cumple con el Léame estándar y está en GitHub, sería genial si pudiera agregar la insignia. Esto permite que las personas accedan a esta especificación y ayuda con la adopción de README. Credencial **no requerida**.

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

To add in Markdown format, use this code:
Para adicionar no formato Markdown, use este código:
Para agregar en formato Markdown, use este código:

```
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
```

## Example Readmes
## Leia-mes de exemplo
## Léame de muestra

To see how the specification has been applied, see the [example-readmes](example-readmes/).
Para ver como a especificação foi aplicada, veja [example-readmes](example-readmes/).
Para ver cómo se aplicó la especificación, consulte [example-readmes](example-readmes/).

## Related Efforts
## Esforços Relacionados
## Esfuerzos relacionados

- [Art of Readme](https://github.com/noffle/art-of-readme) - 💌 Learn the art of writing quality READMEs.
- [open-source-template](https://github.com/davidbgk/open-source-template/) - A README template to encourage open-source contributions.

## Maintainers
## Mantenedores
## Mantenedores

[@RichardLitt](https://github.com/RichardLitt).

## Contributing
## Contribuindo 
## Contribuyendo

Feel free to dive in! [Open an issue](https://github.com/RichardLitt/standard-readme/issues/new) or submit PRs.
Sinta-se à vontade para mergulhar! [Abra um problema](https://github.com/RichardLitt/standard-readme/issues/new) ou envie PRs.
¡Siéntete libre de sumergirte! [Abrir una incidencia](https://github.com/RichardLitt/standard-readme/issues/new) o enviar relaciones públicas.

Standard Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.
O Readme padrão segue o Código de Conduta [Acordo do Colaborador](http://contributor-covenant.org/version/1/3/0/).
El Léame estándar sigue el Código de conducta [Acuerdo de colaborador] (http://contributor-covenant.org/version/1/3/0/).

### Contributors
### Contribuidores
### Colaboradores

This project exists thanks to all the people who contribute. 
Este projeto existe graças a todas as pessoas que contribuem.
Este proyecto existe gracias a todas las personas que contribuyen.
<a href="https://github.com/RichardLitt/standard-readme/graphs/contributors"><img src="https://opencollective.com/standard-readme/contributors.svg?width=890&button=false" /></a>


## License
## Licença
## Licencia

[MIT](LICENSE) © Richard Littauer
