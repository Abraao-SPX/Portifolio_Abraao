docker-compose up --build# Documentação: Abraão Premium Portfolio

Este repositório contém a versão premium do portfólio, projetado com a Stack moderna solicitada (Next.js 14, Tailwind, Framer Motion e Lenis) e totalmente **Dockerizado** para que você possa desenvolver e executar o site sem instalar o ecossistema do Node.js na sua máquina Windows.

## 🚀 Como subir o projeto usando Docker

Você não precisa rodar `npm install` localmente. Garanta apenas que você tem o **Docker** e o **Docker Compose** instalados (por exemplo, via Docker Desktop no Windows).

Abra o terminal do PowerShell neste diretório e execute:
```bash
docker-compose up --build
```

O Docker criará a imagem baseada em Node Alpine, instalará as dependências ocultas em um volume anônimo (preservando o filesystem do Windows contra erros de caminhos) e subirá o servidor Next.js na porta **3000**.

> 💡 Após finalizar a build e aparecer `Ready in XYZ ms`, abra o seu navegador e acesse **http://localhost:3000**

Se quiser rodar o container em *background* (liberando seu terminal), use:
```bash
docker-compose up -d --build
```
Para parar, use o comando `docker-compose down`.

---

## ✏️ Como editar as INFORMAÇÕES PESSOAIS

Para facilitar a sua vida e entregar a modularidade de um desenvolvedor nível Sênior, eu isolei **todos** os seus dados de texto. Você não precisa procurar em qual arquivo React a descrição X está escrita.

1. Navegue até o arquivo de configuração central em: `src/data/portfolio.ts`
2. Modifique os arrays, strings e nomes neste arquivo. O site importará tudo dinamicamente.
   * **Edite seu nome:** Em `personal.name`
   * **Edite seus projetos:** No Array `projects` (cada item gera um Card autômato).
   * **Edite as Tecnologias/Skills:** No Array `skills`.
   * **Edite seu background:** No Array `experiences` a Timeline será populada dinamicamente.
   * **Edite os linkrs:** Em `personal.socials` e nos links de `demoLink`/`repoLink` dos seus Projetos.

---

## ✉️ Como editar as credenciais de e-mail (EmailJS)

A lógica do formulário de Contato já está funcional utilizando `@emailjs/browser` de forma modularizada na camada de cliente (`src/components/Contact.tsx` consumindo `src/lib/email.ts`). 

Para conectar à sua conta do EmailJS:
1. Crie um arquivo oculto chamado `.env.local` na raiz deste diretório (ao lado do `docker-compose.yml`).
2. Copie o formato exemplificado em `.env.local.example` e substitua para os SEUS IDs. Repare que as chaves começam com `NEXT_PUBLIC_` então o ambiente do Next as carrega para o Browser.

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="COLE_O_KEY_AQUI"
NEXT_PUBLIC_EMAILJS_SERVICE_ID="COLE_O_SERVICE_ID_AQUI"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="COLE_O_TEMPLATE_ID_AQUI"
```

**⚠️ Importante na Configuração do Template do EmailJS:**
Vá no seu Dashboard do EmailJS, no Template que for criar, e veja as variáveis. Nos arquivos do React eu configurei o formulário usando as Tags HTML `name="user_name"`, `name="user_email"` e `name="message"`. Portanto, o seu template do Email JS deve possuir {{user_name}}, {{user_email}} e {{message}} para receber os dados limpos. Caso tenha nomes diferentes lá, você deverá trocar os atributos `name` nos inputs do `src/components/Contact.tsx`. 

---

## 🖼 Como editar IMAGENS

1. O local padrão de assets num projeto Next.js fica sempre na pasta raiz `/public` ou em `src/app/globals.css` (para Backgrounds como texturas css).
2. Na estrutura atual, os Mockups dos projetos (Cards Dark Style) formam blocos cinza programados usando flexbox ao invés de imagens jpg genéricas, pois ficam muito mais requintados no portfólio.
3. Futuramente, se você desejar incluir texturas ou thumbnails jpg em `src/components/Projects.tsx`, basta substituir a `div bg-zinc-900` por uma Tag `<Image src="..." />` do Next exportando sua imagem local posta na pasta `/public`. Da forma atual o estilo é intencionalmente limpo.

---

## 🎨 Ajustar a Identidade Visual

A tipografia e a hierarquia utilizam uma biblioteca que combina cores baseadas em Tailwind. 
Caso deseje trocar:
* As Fontes Premium do projeto atual são `Syne` (Headings) e `Inter` (Parágrafos e Labels). Elas são implementadas no NextJS sem download via injetor global no arquivo `src/app/layout.tsx`.
* Mudança na cor primária de "#ffffff" para outras cores de destaque deve ser ajustada nas variaveis `colors` estendidas dentro de `tailwind.config.ts`.

