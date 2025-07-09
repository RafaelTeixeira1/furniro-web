# 🛋️ Furniro Web

Projeto de loja virtual **Furniro Web**, desenvolvido em React, hospedado em EC2, responsivo, com autenticação Clerk, integração ViaCEP, JSON Server, Redux e testes com cobertura mínima de 80%.

---

## 🚀 Tecnologias Utilizadas

- React + Vite
- TypeScript
- Tailwind CSS
- React Router
- Clerk (autenticação)
- Redux (controle de carrinho)
- React Hook Form + Zod (validações)
- JSON Server (API mock)
- Jest + React Testing Library (testes)
- AWS EC2 (hospedagem)
- AWS S3 (imagens)

---

## 🗂️ Organização do Git

- Branch principal: `main`
- Branch de desenvolvimento: `developer`
- Branches de funcionalidades:
  - `feature/nome-da-funcionalidade`

Commits seguem **conventional commits**.

---

## ✨ Funcionalidades

### Header

- Ícone de perfil → Login
- Ícone de carrinho → abre overlay com produtos
- Clique no carrinho → página `Cart`
- Botão `Contact` → acessível apenas logado

### Cart Sidebar

- Abre ao clicar em `Add To Cart`
- Remoção de produtos
- Botões:
  - Cart → página de carrinho
  - Checkout → página de checkout
  - Comparison → placeholder

### Cart

- Lista itens adicionados
- Breadcrumb → Home
- Alteração de quantidade refletindo no total
- Subtotal = Total
- Botão `Check Out` → página de checkout

### Checkout

- Apenas para usuários logados
- Validação de todos os campos
- Breadcrumb → Home
- Seleção de pagamento obrigatória
- Toast ao finalizar pedido
- CEP integrado ao ViaCEP

### Contact

- Apenas para usuários logados
- Campos obrigatórios: Nome e Email
- Breadcrumb → Home
- Toast ao enviar

---

## ✅ Requisitos Atendidos

- React Router
- JSON Server para dados em tempo real
- Validações com React Hook Form + Zod
- Responsivo
- Repositório privado
- Clerk para autenticação
- Redux para carrinho
- AWS EC2 (porta 80 para front, 3001 para API)
- AWS S3 para imagens
- Integração ViaCEP
- Testes com cobertura >80% com Jest + RTL

---

## 🔐 Configuração do `.env`

Crie um arquivo `.env` na raiz:

```
VITE_CLERK_PUBLISHABLE_KEY=sua_clerk_publishable_key
VITE_CLERK_SECRET_KEY=sua_clerk_secret_key
```

⚠️ Apenas variáveis prefixadas com `VITE_` são reconhecidas pelo Vite.

---

## 🛠️ Como rodar localmente

Clone o projeto:

```bash
git clone https://github.com/seuusuario/furniro-web.git
cd furniro-web
```

Instale as dependências:

```bash
npm install
```

Crie e configure o `.env` como mostrado acima.

Rode o projeto:

```bash
npm run dev
```

Acesse em:

```
http://localhost:5173
```

---

## 🖥️ Rodando no EC2

- Front rodando via `serve` na porta 80
- JSON Server na porta 3001
- Imagens servidas pelo S3
- Clerk configurado no `.env`

Rebuild necessário após alterações no `.env`:

```bash
NODE_OPTIONS="--max-old-space-size=4096" npx vite build --outDir dist
```

---

## 🧪 Executando os testes

Para rodar os testes e gerar relatório de cobertura:

```bash
npx jest --coverage
```

ou

```bash
npm test -- --coverage
```

Relatório visual:
```
coverage/lcov-report/index.html
```

---

## 📹 Vídeo de demonstração

🎥 [Clique aqui para assistir à demonstração do Furniro Web rodando em produção no EC2](#)

> Substitua o `#` pelo link do Google Drive, YouTube ou Loom demonstrando:
> - Login no EC2 via SSH
> - Execução de `pm2 ls` com serviços online
> - Acesso ao site no navegador
> - Teste da API JSON Server
> - Explicação do deploy

---

## ✉️ Contato

Desenvolvido por **Seu Nome Completo**  
[LinkedIn](#) | [Email](mailto:seu@email.com)

---

✅ Pronto para apresentação em banca, portfólio ou processo seletivo.
