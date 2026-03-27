# Como Editar seu Portfólio

Para personalizar este portfólio com as suas próprias informações, você precisa editar principalmente **um arquivo** de dados e substituir algumas imagens. O projeto foi estruturado para ser muito fácil de atualizar.

## 1. Onde colocar seus textos e dados
Todas as informações de texto (nome, resumo, projetos, habilidades e links) ficam centralizadas no arquivo:
`assets/data/placeholders.js`

Ao abrir este arquivo, você encontrará a variável `window.portfolioData`. Basta alterar o texto entre aspas pelas suas informações:
- **`profile`**: Edite seu nome, cargo, resumo, cidade, e-mail e outras informações da seção "Sobre".
- **`socialLinks`**: Coloque os links para seu LinkedIn, GitHub e Currículo.
- **`projects`**: Preencha com os títulos, descrições, tecnologias e links dos seus projetos.
- **`skills`**: Adicione ou remova tecnologias da sua lista de habilidades.

*Nota: O e-mail definido na propriedade `email` será usado para receber as mensagens enviadas através do formulário de contato do site.*

## 2. Onde colocar suas imagens
Para alterar as fotos do portfólio, substitua os arquivos na pasta `assets/images/` (crie a pasta se não existir, ou verifique as tags `<img>` no `index.html` caso queira usar links externos / outras pastas).

Recomenda-se ter pelo menos:
- Uma foto de perfil / avatar.
- Imagens ou capturas de tela para cada um dos seus projetos.

## 3. Configurações extras (Opcional)
Se desejar alterar configurações avançadas, o nome da página na aba do navegador ou estruturas adicionais, você pode editar diretamente o arquivo:
`index.html`

Por exemplo, procure por:
```html
<title>Portfolio Seu Nome</title>
```
E substitua "Seu Nome" pelo seu nome real.

Dessa forma, com poucos passos você terá um portfólio totalmente com a sua cara!

