# Documentação Técnica — Landing Page Doze Digital MKT

**Projeto:** `doze-website`  
**Arquitetura:** HTML, CSS e JavaScript estáticos  
**Integração prevista:** Dashboard NPS em `/NPS`  
**Versão:** 1.0 — 03/08/2026

## 1. Visão geral

A Landing Page da Doze Digital MKT é um site institucional de página única. Ela apresenta a proposta de valor da agência, seus problemas de mercado, método, serviços, time, cases, prova social e chamadas para contato.

## 2. Estrutura

```text
doze-website/
├── assets/
│   ├── css/
│   │   ├── variables.css
│   │   ├── global.css
│   │   ├── components.css
│   │   ├── sections.css
│   │   └── responsive.css
│   ├── js/main.js
│   ├── images/
│   │   ├── equipe-doze.jpg
│   │   └── samila-hero.jpg
│   └── icons/
├── index.html
├── README.md
└── .gitignore
```

## 3. Responsabilidades dos arquivos

- `variables.css`: cores, fontes, container, raios, transições e altura do header.
- `global.css`: reset, tipografia, container e regras globais.
- `components.css`: header, navegação, botões, menu mobile e animações.
- `sections.css`: estilos de Hero, Diagnóstico, Depoimentos, Método, Serviços, Time, Cases, CTA e Footer.
- `responsive.css`: breakpoints, grids, zoom e ajustes por altura.
- `main.js`: menu mobile, header no scroll, teclado, resize, animações e ano do footer.

## 4. Seções

1. **Hero (`#inicio`)** — proposta de valor, foto da fundadora, CTA e destaques.
2. **Diagnóstico (`#sobre`)** — três problemas de posicionamento.
3. **Depoimentos** — prova social; conteúdo atual provisório.
4. **Método (`#metodo`)** — Ciclo Doze com 12 etapas e quatro fases.
5. **Serviços (`#servicos`)** — serviços online e offline.
6. **Time** — competências do time com imagem de fundo.
7. **Cases (`#cases`)** — marcas e segmentos atendidos.
8. **CTA (`#contato`)** — diagnóstico e acesso à área do cliente.
9. **Footer** — navegação e assinatura.

## 5. Breakpoints principais

- `≤ 480px`: celulares pequenos e zoom alto.
- `≥ 640px`: tablets e celulares largos.
- `≥ 760px`: diagnóstico/depoimentos em três colunas.
- `≥ 820px`: composições mais amplas de Serviços e Time.
- `≥ 980px`: navegação desktop e layouts de duas colunas.
- `≥ 1100px`: Serviços em cinco colunas.

## 6. Comportamentos JavaScript

- Header recebe `.is-scrolled` após 40 px de rolagem.
- Menu mobile abre e fecha com atualização de ARIA.
- Menu fecha por clique, tecla `Escape` e resize para desktop.
- `IntersectionObserver` adiciona `.is-visible` aos elementos `.reveal`.
- Footer pode exibir o ano atual automaticamente.

## 7. Pendências prioritárias

1. Substituir depoimentos provisórios por conteúdo aprovado.
2. Configurar o WhatsApp real no CTA.
3. Validar cases e autorizações.
4. Publicar e testar `/NPS`.
5. Revisar animações para que o conteúdo nunca fique invisível.
6. Finalizar SEO, acessibilidade e performance.
7. Executar testes em 320×568, 375×667, 768×1024, 1366×768 e 1920×1080.

## 8. Fluxo Git

```powershell
git status
git add .
git commit -m "feat: update landing page"
git push origin main
```

## 9. Regras de manutenção

- Alterar uma área por vez.
- Evitar regras duplicadas no `responsive.css`.
- Não usar seletores temporários com `nth-of-type`.
- Após mudar a altura do header, revisar Hero, menu e âncoras.
- Validar HTML e console antes de publicar.
- Não bloquear o zoom do navegador.
