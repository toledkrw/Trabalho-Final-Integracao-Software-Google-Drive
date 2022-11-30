[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<div align="center">
  <a href="https://github.com/toledkrw/Trabalho-Final-Integracao-Software-Google-Drive">
    <img src="https://gifs.eco.br/wp-content/uploads/2021/09/gifs-do-hulk-dancando-1.gif" style="width:200px; height:200px;"alt="Logo" />
  </a>

  <h3 align="center">Integração de Software - Trabalho Final - Google Drive API</h3>

</div>

## 🔰 Começando

Esse projeto foi criado para ser apresentado como o trabalho final da disciplina Integração de Software.

O Trabalho consiste na criação de um artefato de software que possa comunicar com a API do <a href="https://developers.google.com/drive/api/v3/reference?hl=pt_BR">Google Drive</a>, implementando funcionalidades como: 
- Enviar arquivos, 
- Criar pastas,
- Enviar arquivos para pastas específicas,
- Deletar arquivos.

<br/>

### ⚙ Suporte de primeiro-nível

[![Visual Studio Code][vscode]][vscode-url]
[![NPM][npm]][npm-url]

### 💾 Tecologias empregadas

[![JavaScript][javascript]][javascript-url]
[![Node.js][node.js]][node-url]

### 📋 Pré-requisitos

Você precisa dessas tecnologias instaladas nessas versões:

[![Node.js version][node.js-version]][node.js-installation]
[![NPM version][npm-version]][npm-installation]

> Se não tiver as tecnologias acima instaladas, basta clicar na badge delas e você poderá baixa-las.

### 📌 Instalação

#### 🔩 Configuração local

##### 1 - Dependencias

O Projeto tem apenas dependencias de desenvolvimento. Para instala-las basta executar

```bash
yarn install
```
ou 
```
npm install
```

##### 2 - Run

Para rodar o projeto, execute:
```
node .\src\app.js
```

## 🎨 Funcionalidades
A aplicação conta com algumas funcionalidades já implementadas:
<br/>

#### 1 uploadFile
A aplicação permite que você faça uploads de arquivos na pasta input para sua conta do Google Drive direto na pasta Root (assista o vídeo para entender como é feita a autorização de acesso à conta).

#### 2 createFolder
A aplicação permite que você crie pastas no Google Drive.

#### 3 uploadFileToFolder
A aplicação permite que você faça uploads de arquivos direto para pastas especificadas (via ID).

#### 4 deleteFile
A aplicação permite que você delete arquivos no Google Drive pelo ID do arquivo.
## 📑 Licenças

Distributed under the MIT License. See `LICENSE` for more information.<br/>
Distribuído sob a MTI License. Veja `LICENSE` para mais informações.

<!-- ASSETS -->

<!-- BADGE - Contributors -->

[contributors-shield]: https://img.shields.io/github/contributors/toledkrw/Trabalho-Final-Integracao-Software-Google-Drive.svg?style=for-the-badge
[contributors-url]: https://github.com/toledkrw/Trabalho-Final-Integracao-Software-Google-Drive/graphs/contributors

<!-- BADGE - Issues -->

[issues-shield]: https://img.shields.io/github/issues/toledkrw/Trabalho-Final-Integracao-Software-Google-Drive.svg?style=for-the-badge
[issues-url]: https://github.com/toledkrw/Trabalho-Final-Integracao-Software-Google-Drive/issues

<!-- BADGE - License -->

[license-shield]: https://img.shields.io/github/license/toledkrw/Trabalho-Final-Integracao-Software-Google-Drive.svg?style=for-the-badge
[license-url]: https://github.com/toledkrw/Trabalho-Final-Integracao-Software-Google-Drive/blob/main/LICENSE

<!-- BADGE - Javascript -->

[javascript]: https://img.shields.io/badge/JavaScript-fce303?logo=javascript&logoColor=black&style=for-the-badge
[javascript-url]: https://www.javascript.com/


<!-- BADGE - Node.js -->

[node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/
[node.js-version]: https://shields.io/badge/node->=14-43853D?logo=node.js&style=for-the-badge&logoColor=white
[node.js-installation]: https://nodejs.dev/en/learn/how-to-install-nodejs

<!-- BADGE - NPM -->

[npm]: https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: https://www.npmjs.com/
[npm-version]: https://shields.io/badge/yarn->=7.20-%23000000?logo=npm&style=for-the-badge&logoColor=white
[npm-installation]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

<!-- BADGE - VS Code -->

[vscode]: https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white
[vscode-url]: https://code.visualstudio.com/