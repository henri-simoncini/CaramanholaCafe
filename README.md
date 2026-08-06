# Caramanhola Lanches & Café

Site institucional da Caramanhola: landing page de apresentação da loja e cardápio online acessado via QR code nas mesas.

## Stack

- [Next.js 14](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Rotas

| Rota        | Descrição                                                      |
| ----------- | -------------------------------------------------------------- |
| `/`         | Landing page: hero, sobre a loja, prévia do cardápio, contato   |
| `/cardapio` | Cardápio completo, mobile-first (acessado pelo QR code na mesa) |

## Editando o cardápio

Produtos, categorias e preços ficam em `data/menu.ts`. Para adicionar um item, inclua um objeto em `menuItems`:

- `featured: true` — define o produto em destaque da página `/cardapio`
- `popularRank: n` — coloca o item na lista "Mais pedidos"
- `highlight: true` — exibe o item na prévia do cardápio na landing page

Dados da loja (WhatsApp, endereço, horários, redes sociais) ficam em `data/site.ts`.

## Pendências antes de publicar

As imagens são placeholders do Unsplash — procure por comentários `trocar pela foto real` no código:

- Foto de fundo do hero e da fachada em `app/page.tsx`
- Fotos dos produtos em `data/menu.ts`
- QR code ilustrativo no banner em `app/page.tsx` — gerar o QR real apontando para `/cardapio`

Também é necessário atualizar em `data/site.ts`: número do WhatsApp, endereço, link do Google Maps e perfis das redes sociais.
