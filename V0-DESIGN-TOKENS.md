# 🎨 NORDIC - Design Tokens para v0.dev

## 📐 Layout & Breakpoints

```css
/* Mobile */
@media (max-width: 809px) {
}

/* Tablet */
@media (min-width: 810px) and (max-width: 1199px) {
}

/* Desktop */
@media (min-width: 1200px) {
}
```

## 🎨 Cores

```css
/* Light Mode */
--background: rgb(255, 255, 255); /* Branco */
--text: rgb(0, 0, 0); /* Preto */

/* Dark Mode (preferencial) */
--background: rgb(0, 0, 0); /* Preto */
--text: rgb(255, 255, 255); /* Branco */
```

## 📝 Tipografia

```css
/* Fontes principais */
font-family: 'Inter Display', sans-serif; /* Texto geral */
font-family: 'Newsreader', serif; /* Títulos grandes */
font-family: 'Fragment Mono', monospace; /* Código/detalhes */
font-family: 'FF Grotesk', sans-serif; /* Alternativa */

/* Tamanhos */
Hero Title: 5rem (80px) Desktop, 3rem (48px) Mobile
Section Title: 2rem (32px)
Body Text: 1.1rem (17.6px)
```

## 🏗️ Estrutura do Site

### Header

- Logo "NORDIC" (topo esquerdo)
- Menu: Work, About, Contact (topo direito)
- Background transparente
- Sticky/Fixed

### Hero Section

```
Título grande centralizado: "NORDIC"
Subtítulo: "Welcome to NORDIC – where brands discover their rhythm..."
Grid de fundo com opacidade 0.15
```

### Grid de Projetos

```
Desktop: 3 colunas
Tablet: 2 colunas
Mobile: 1 coluna
Gap: 2rem

Cada card:
- Imagem aspect-ratio 4:3
- Título do projeto
- Categoria
- Hover: escala 1.02
```

### Footer

```
Texto centralizado
Opacidade: 0.6
Padding: 4rem 0
```

## ✨ Animações

```javascript
// Fade in ao scroll
opacity: 0 → 1
translateY: 50px → 0
duration: 1s
easing: ease-out

// Respeitar prefers-reduced-motion
```

## 🔗 Links Úteis

- Site atual: https://form-studio-vite-c5o7htq9r-eryck-assis-projects.vercel.app
- GitHub: https://github.com/eryckassis/form-studio-vite

## 📦 Componentes Necessários

### Para v0.dev criar:

1. ✅ Header com logo e menu
2. ✅ Hero section com texto grande
3. ✅ Grid responsivo de projetos
4. ✅ Card de projeto (imagem + texto)
5. ✅ Footer minimalista
6. ✅ Dark mode toggle
7. ✅ Scroll animations (Framer Motion ou GSAP)

## 💡 Prompt para v0.dev

```
Crie um portfolio minimalista dark mode chamado "NORDIC":

LAYOUT:
- Header fixo: logo "NORDIC" esquerda, menu direita
- Hero: título gigante "NORDIC" centralizado com grid de fundo sutil
- Seção projetos: grid 3 colunas desktop, 2 tablet, 1 mobile
- Footer: copyright centralizado

ESTILO:
- Fundo preto, texto branco
- Fontes: Inter Display (corpo), Newsreader (títulos)
- Animações fade-in ao scroll
- Hover nos cards: scale 1.02
- Grid de fundo com linhas verticais opacidade 0.15

COMPONENTES:
- ProjectCard: imagem 4:3 + título + categoria
- Container max-width 1400px
- Breakpoints: 810px, 1200px

Stack: Next.js 14, Tailwind CSS, Framer Motion
```

---

**Para usar no v0.dev:**

1. Copie o prompt acima
2. Anexe screenshots do site atual
3. Refine com iterações
