# Diet Controller (front-end)

Front-end de um sistema de acompanhamento nutricional, feito para a Diet Controller como projeto do Laboratório Experimental de Sistemas de Informação da ESPM (2024).

A ideia do produto é ajudar pacientes a acompanhar a alimentação com tabelas nutricionais e sugestões. Neste repositório está a parte que a pessoa usa: as páginas, as calculadoras e o dashboard, com dados de exemplo no lugar da API.

## O que tem

- **Página inicial** com os caminhos principais do app.
- **Login e cadastro**.
- **Calculadoras** de calorias, IMC e consumo de água.
- **Dashboard de progresso** com gráfico de calorias (consumidas, restantes e gastas), evolução ao longo do tempo, hidratação e refeições do dia.
- **Páginas institucionais**: o que é o Diet Controller, "posso ajudar?" e sobre.

## Stack

- Next.js 15 (App Router) e React 18
- TypeScript
- Material UI e CSS Modules
- Chart.js com react-chartjs-2
- React Icons

## Rodar localmente

Precisa de Node.js 18 ou mais novo.

```bash
npm install
npm run dev
```

E abrir `http://localhost:3000`.

## Estrutura

```
src/app/
  page.tsx                  página inicial
  login/                    login e cadastro
  calculadora/              calculadoras de calorias, IMC e água
  dashboardProg/            dashboard de progresso
  o-que-e-diet/             apresentação do produto
  entenda-o-que-precisa/    "posso ajudar?"
  sobre/                    sobre
  navbar.tsx                navegação
```

## Licença

[MIT](LICENSE)
