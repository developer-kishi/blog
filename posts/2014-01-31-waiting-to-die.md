---
title: Ambiente de desenvolvimento
description: "Guia de instalação e configuração de ambiente de desenvolvimento
  com WSL 2, docker, configuração vscode "
date: 2020-09-12 08:48:36
image: assets/img/desenvolvimento.png
category: dev
background: "#637a91"
---
# O que é WSL?

O Subsistema do Windows para Linux permite que os desenvolvedores executem um ambiente Linux que irei usar para criar meus containers docker assim me permitindo instalar diversas tecnologias diferentes.



Para instalar o WSL é muito fácil no site da [microsoft wsl](https://docs.microsoft.com/pt-br/windows/wsl/install-win10) 

Instale o Ubuntu sem dificuldades na Microsoft Store

![instalação do Ubuntu](assets/img/instalacaoubuntu.png "Instalação Ubuntu/ Linux no Wsl 2")

 Crie um arquivo chamado **.wslconfig** na raiz da sua pasta de usuário **(C:\Users<seu_usuario>)** e defina estas configurações:



![configuração basica de utilização da memória](assets/img/screenshot_1.png "Configuração de memoria ram")

Se voce não configurar, o WSL ira usar o maximo possivel e seu windows pode ficar muito lento.