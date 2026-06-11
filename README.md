# 🎮 LudiTech

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-cyan)
![Arduino](https://img.shields.io/badge/Arduino-Uno-green)

Um jogo de perguntas e respostas desenvolvido com **React**, **TypeScript**, **Vite**, **Tailwind CSS** e **linguagem C para Arduino**, projetado para partidas rápidas entre dois jogadores.

---

# 🚀 Sobre o Projeto

O **LudiTech** é um jogo competitivo de perguntas e respostas no qual dois jogadores disputam quem consegue obter a maior pontuação ao longo da partida.

O projeto integra uma aplicação web desenvolvida com React a um sistema embarcado implementado em linguagem C para Arduino Uno, proporcionando uma experiência que combina software e hardware.

A aplicação é responsável por gerenciar as perguntas, controlar a pontuação e exibir o resultado da partida, enquanto o Arduino realiza a interação com os componentes físicos do jogo.

Este projeto foi desenvolvido como atividade da disciplina de **Microcontroladores**, aplicando conceitos de desenvolvimento web, sistemas embarcados e integração entre hardware e software.

📄 Código do Arduino: [codigoEmC.md](./codigoEmC.md)



# 🎯 Objetivos do Projeto

* Desenvolver uma aplicação web moderna utilizando React e TypeScript.
* Aplicar conceitos de componentização e gerenciamento de estado.
* Integrar software e hardware em um único projeto.
* Utilizar programação em linguagem C para controle de dispositivos físicos.
* Criar uma experiência interativa para partidas de perguntas e respostas.


# ✨ Funcionalidades

## Configuração da Partida

* Cadastro dos nomes dos dois jogadores.
* Seleção da quantidade de perguntas:

  * 3 perguntas (Modo Rápido)
  * 5 perguntas (Modo Normal)

## Durante a Partida

* Sorteio aleatório de perguntas.
* Exibição da resposta apenas quando solicitado.
* Controle automático de pontuação.
* Indicação do jogador que respondeu corretamente.
* Opção "Ninguém Acertou".
* Barra de progresso da partida.
* Destaque visual para o jogador líder.
* Interface responsiva para diferentes dispositivos.

## Resultado Final

* Exibição do vencedor da partida.
* Tratamento de empate.
* Exibição das pontuações finais.
* Reinício da partida.

---

# 🔌 Integração com Hardware

O sistema utiliza um Arduino Uno para controlar os componentes físicos do jogo.

## Componentes Utilizados

* Arduino Uno
* 2 Displays LCD 16x2 com módulo I2C
* 2 Botões
* 2 LEDs
* Resistor de 220 Ω
* Protoboard
* Jumpers

## Funcionamento

* Cada jogador possui um botão físico.
* O Arduino monitora os botões pressionados.
* Os LEDs indicam visualmente as ações dos jogadores.
* Os displays LCD exibem informações relacionadas à partida.
* Toda a lógica de controle dos componentes físicos é implementada em linguagem C.

---

# 🏗️ Arquitetura do Projeto

O projeto foi dividido em duas camadas principais:

## Front-End

Responsável pela interface gráfica e pelas regras do jogo.

### Tecnologias

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router DOM
* Lucide React

## Hardware

Responsável pela interação física do sistema.

### Tecnologias

* Arduino Uno
* Linguagem C
* Displays LCD I2C
* LEDs
* Botões

---

# 🛠️ Tecnologias Utilizadas

## Desenvolvimento Web

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router DOM
* Lucide React

## Sistemas Embarcados

* Arduino Uno
* Linguagem C

---

# 📂 Estrutura do Projeto

```bash
src/
│
├── assets/
│   └── perguntas.json
│
├── components/
│   ├── QuestionCard.tsx
│   ├── ScoreBoard.tsx
│   └── WinnerCard.tsx
│
├── context/
│   └── GameContext.tsx
│
├── pages/
│   ├── Setup.tsx
│   ├── Game.tsx
│   └── Winner.tsx
│
├── types/
│   └── Pergunta.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

# 🎯 Como Executar o Projeto

## Clonar o Repositório

```bash
git clone https://github.com/Luiiza-Albuquerque/luditech.git
```

## Entrar na Pasta do Projeto

```bash
cd luditech
```

## Instalar as Dependências

```bash
npm install
```

## Executar em Ambiente de Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:

```bash
http://localhost:5173
```

---

# 📦 Gerar Build de Produção

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

---

# 📝 Banco de Perguntas

As perguntas são armazenadas no arquivo:

```bash
src/assets/perguntas.json
```

Cada pergunta segue a seguinte estrutura:

```json
{
  "id": 1,
  "pergunta": "Qual linguagem é executada diretamente pelo navegador?",
  "resposta": "JavaScript"
}
```

Novas perguntas podem ser adicionadas facilmente mantendo o mesmo padrão de estrutura.

---

# 🎨 Características da Interface

* Tema Dark
* Gradientes modernos
* Efeitos Glassmorphism
* Componentes reutilizáveis
* Design responsivo
* Animações suaves
* Experiência visual inspirada em programas de perguntas e respostas
* Interface otimizada para desktop e dispositivos móveis

---

# 👨‍💻 Equipe

| Nome                              | Participação                                         |
| --------------------------------- | ---------------------------------------------------- |
| Emanuelly Clarissa de Souza Silva | Acompanhamento e Montagem Eletrônica                                   |
| Jhonatan Inácio da Silva          | Desenvolvimento em programação                                   |
| Laísa de Lima Albuquerque         | Desenvolvimento Front-End e montagem eletrônica  |
| Lucas Gabriel Honório Teixeira    | Documentação e Acompanhamento das Atividades                                      |

---

# 📚 Contexto Acadêmico

Este projeto foi desenvolvido para a disciplina de **Microcontroladores**, com o objetivo de aplicar conhecimentos de:

* Desenvolvimento Web
* Programação em Linguagem C
* Sistemas Embarcados
* Integração Hardware e Software
* Desenvolvimento de Interfaces Modernas
* Trabalho em Equipe

---

# 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais.
