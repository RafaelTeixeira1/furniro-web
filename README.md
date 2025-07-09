# 🛋️ Furniro Web

O Furniro Web é uma loja virtual completa e responsiva, construída com React e hospedada na AWS EC2, oferecendo autenticação segura via Clerk, integração automática de endereços com ViaCEP, gerenciamento de produtos com JSON Server e controle de carrinho via Redux. O projeto conta com uma base sólida de testes, garantindo mais de 80% de cobertura, e está pronto para uso em produção.

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
  - `feature/cart-overlay`
  - `feature/checkout`
  - `feature/contact-page`
  - `feature/login-page`

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
  - Comparison

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
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cHJvcGVyLXNhd2Zpc2gtMC5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_PCddVq2UfFoqp7C3Wdf0tw9DEWAoHDeJhQZKP7ypmA
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

# 🛠️ Passo a passo para utilizar imagens locais nos arquivos `.tsx` do Furniro Web

Este guia permite aos **usuarios utilizarem as imagens locais em vez dos links AWS S3** ao rodar o Furniro Web **offline ou em rede local**, sem quebrar a estrutura do projeto.

---

## 🎯 Objetivo

Trocar links como:
```
"https://furniro-web-imagens.s3.us-east-2.amazonaws.com/images/assets/logo.png"
```
por:
```
"src/assets/logo.png"
```
utilizando imagens em:
```
/public/images/
/src/assets/
```

---

## 🗂️ Arquivos onde realizar as alterações

### ✅ 1. `src/components/layout/Hero.tsx`
- **O que trocar:**  
  ```tsx
  const heroImage = "https://furniro-web-imagens.s3.us-east-2.amazonaws.com/images/assets/hero.png";
  ```
  **Para:**
  ```tsx
  const heroImage = "src/assets/hero.png";
  ```

---

### ✅ 2. `src/components/layout/Navbar.tsx`
- **O que trocar:**  
  ```tsx
  const logo = "https://furniro-web-imagens.s3.us-east-2.amazonaws.com/images/assets/logo.png";
  ```
  **Para:**
  ```tsx
  const logo = "src/assets/logo.png";
  ```

---

### ✅ 3. `src/components/layout/ShopBar.tsx`
- **O que trocar:**  
  ```tsx
  const shopImage = "https://furniro-web-imagens.s3.us-east-2.amazonaws.com/images/assets/img-system/shop.png";
  ```
  **Para:**
  ```tsx
  const shopImage = "src/assets/img-system/shop.png";
  ```

---

### ✅ 4. `src/components/sections/FurniroFurniture.tsx`
- **Imagens no `src` de várias tags `<img />`.**
- Trocar:
  ```tsx
  <img src="https://furniro-web-imagens.s3.us-east-2.amazonaws.com/leftTop.png" ... />
  ```
  **Para:**
  ```tsx
  <img src="public/leftTop.png" ... />
  ```
- Repita para todas as imagens do arquivo:
  - `leftTop.png`
  - `leftTop2.png`
  - `leftBottom.png`
  - `leftBottom2.png`
  - `rightTop.png`
  - `rightTop2.png`
  - `rightBottom.png`
  - `sala.png`

---

### ✅ 5. `src/components/sections/RoomInspirationSection.tsx`
- Dentro do array `slides`, trocar:
  ```ts
  imagem: "https://furniro-web-imagens.s3.us-east-2.amazonaws.com/images/Rectangle+24.png",
  ```
  **Para:**
  ```ts
  imagem: "/images/Rectangle+24.png",
  ```

- Faça isso em cada item do array `slides`.

---


## ✅ Finalizando

Após as alterações, rode o projeto:
```bash
npm run dev
```
Agora todas as imagens serão servidas localmente, permitindo rodar o projeto offline ou em redes locais.

---


## 📹 Vídeo de demonstração

🎥 [Clique aqui para assistir à demonstração do Furniro Web rodando em produção no EC2](https://drive.google.com/file/d/1TR37sm0wjdZXpVLUYqu8uA_0p5E8Pg1c/view?usp=sharing)

> - Login no EC2 via SSH
> - Execução de `pm2 ls` com serviços online
> - Acesso ao site no navegador
> - Teste da API JSON Server
> - Explicação do deploy

---

## ✉️ Contato

Desenvolvido por **Rafael de Souza Teixeira**  
[LinkedIn](https://www.linkedin.com/in/rafael-teixeira-b81906339/) | [Email](mailto:seu@email.com)

---

