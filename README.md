# 🏥 Calculadoras de Saúde - IMC e Déficit Calórico

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 📋 Descrição

Uma aplicação web moderna e responsiva que oferece **duas calculadoras essenciais** para o acompanhamento da saúde e fitness:

- 🧮 **Calculadora de IMC** - Calcula o Índice de Massa Corporal
- 📊 **Calculadora de Déficit Calórico** - Determina a necessidade calórica diária

## ✨ Funcionalidades

### 🎯 Calculadora de IMC

- ⚖️ Cálculo preciso do Índice de Massa Corporal
- 🎨 Classificação visual por cores (normal, sobrepeso, obesidade)
- 📱 Interface intuitiva e responsiva
- ✅ Validação de dados em tempo real

### 🔥 Calculadora de Déficit Calórico

- 🧬 Cálculo da Taxa Metabólica Basal (TMB) usando fórmula Mifflin-St Jeor
- 🏃‍♂️ Consideração do nível de atividade física
- 🎯 Objetivos personalizados (perder, manter ou ganhar peso)
- 📈 Exibição detalhada de TMB e TDEE

### 🔄 Recursos Extras

- 🔗 **Sincronização automática** de dados entre as calculadoras
- 🌟 **Animações suaves** e efeitos visuais
- 📱 **Design responsivo** para desktop e mobile
- 🎨 **Interface moderna** com glass morphism
- ⚡ **Feedback instantâneo** com cores indicativas

## 🖼️ Preview

```
┌─────────────────────────────────────────────────────────────┐
│  🧮 Calculadora de IMC        📊 Déficit Calórico           │
│                                                             │
│  Peso: [____] kg             Peso: [____] kg                │
│  Altura: [____] m            Altura: [____] cm              │
│                              Idade: [____] anos             │
│  [Calcular IMC]              Sexo: [▼Masculino]             │
│                              Atividade: [▼Moderado]         │
│  ┌─────────────────┐         Objetivo: [▼Perder peso]      │
│  │ IMC: 23.5       │                                        │
│  │ Peso Normal ✅   │         [Calcular Calorias]           │
│  └─────────────────┘                                        │
│                              ┌─────────────────────────────┐ │
│                              │ 1800 calorias/dia          │ │
│                              │ Para perder peso            │ │
│                              │ TMB: 1650 • TDEE: 2300     │ │
│                              └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Como Usar

### 📥 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/calculadoras-saude.git
```

2. Navegue até a pasta do projeto:

```bash
cd calculadoras-saude
```

3. Abra o arquivo `index.html` no seu navegador favorito! 🌐

### 🖱️ Utilização

#### Calculadora de IMC:

1. 📝 Digite seu peso em quilogramas
2. 📏 Digite sua altura em metros (ex: 1.75)
3. 🖱️ Clique em "Calcular IMC"
4. 📊 Veja seu resultado com classificação colorida!

#### Calculadora de Déficit Calórico:

1. 📝 Preencha seus dados pessoais (peso, altura, idade)
2. 👤 Selecione seu sexo
3. 🏃‍♂️ Escolha seu nível de atividade física
4. 🎯 Defina seu objetivo (perder, manter ou ganhar peso)
5. 🖱️ Clique em "Calcular Calorias"
6. 📈 Receba sua recomendação calórica detalhada!

## 🛠️ Tecnologias Utilizadas

| Tecnologia        | Descrição                       | Versão |
| ----------------- | ------------------------------- | ------ |
| 🌐 **HTML5**      | Estrutura e marcação semântica  | Latest |
| 🎨 **CSS3**       | Estilização e layout responsivo | Latest |
| ⚡ **JavaScript** | Lógica e interatividade         | ES6+   |

## 📐 Fórmulas Utilizadas

### 🧮 IMC (Índice de Massa Corporal)

```
IMC = peso (kg) / altura² (m)
```

### 🔥 TMB (Taxa Metabólica Basal) - Fórmula Mifflin-St Jeor

```
👨 Homens: TMB = (10 × peso) + (6.25 × altura) - (5 × idade) + 5
👩 Mulheres: TMB = (10 × peso) + (6.25 × altura) - (5 × idade) - 161
```

### 📊 TDEE (Total Daily Energy Expenditure)

```
TDEE = TMB × Fator de Atividade
```

#### 🏃‍♂️ Fatores de Atividade:

- 😴 **Sedentário:** 1.2 (pouco ou nenhum exercício)
- 🚶‍♂️ **Levemente ativo:** 1.375 (exercício leve 1-3x/semana)
- 🏃‍♂️ **Moderadamente ativo:** 1.55 (exercício moderado 3-5x/semana)
- 💪 **Muito ativo:** 1.725 (exercício intenso 6-7x/semana)
- 🔥 **Extremamente ativo:** 1.9 (exercício muito intenso + trabalho físico)

## 🎨 Recursos de Design

- 🌈 **Gradientes modernos** para fundo e botões
- 🔍 **Glass morphism** com efeito de desfoque
- 📱 **Layout responsivo** com CSS Grid
- ✨ **Animações CSS** suaves e elegantes
- 🎯 **Sistema de cores** intuitivo:
  - 🟢 **Verde:** Resultados normais/saudáveis
  - 🟡 **Laranja:** Alertas (sobrepeso/abaixo do peso)
  - 🔴 **Vermelho:** Situações de risco (obesidade)
  - 🔵 **Azul:** Informações gerais

## 📂 Estrutura do Projeto

```
📁 calculadoras-saude/
│
├── 📄 index.html        # Estrutura HTML principal
├── 🎨 style.css         # Estilos e design
├── ⚡ script.js         # Lógica JavaScript
├── 📚 README.md         # Documentação
└── 📋 desktop.ini       # Configurações do sistema
```

## 🌟 Características Técnicas

### 📱 Responsividade

- 📱 **Mobile First:** Design otimizado para dispositivos móveis
- 💻 **Desktop:** Layout em duas colunas para telas maiores
- 🔄 **Breakpoint:** 768px para mudança de layout

### ⚡ Performance

- 🚀 **JavaScript Vanilla:** Sem dependências externas
- 💨 **CSS Otimizado:** Animações com `transform` para melhor performance
- 🎯 **Lazy Loading:** Efeitos aplicados apenas quando necessário

### 🔧 Funcionalidades Avançadas

- 🔄 **Sincronização:** Dados compartilhados entre calculadoras
- ✅ **Validação:** Verificação de dados em tempo real
- 🎬 **Animações:** Transições suaves nos resultados
- 🎨 **Efeitos Hover:** Feedback visual nas interações

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! 🎉

1. 🍴 Faça um fork do projeto
2. 🌿 Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. 💾 Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. 📤 Push para a branch (`git push origin feature/nova-feature`)
5. 🔄 Abra um Pull Request

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Criado com ❤️ para ajudar pessoas a monitorar sua saúde de forma simples e eficaz.

---

### 🎯 Próximas Funcionalidades

- [ ] 💾 Histórico de cálculos
- [ ] 📊 Gráficos de progresso
- [ ] 🍎 Calculadora de macronutrientes
- [ ] 💧 Calculadora de hidratação
- [ ] 📱 Versão PWA (Progressive Web App)
- [ ] 🌙 Modo escuro/claro
- [ ] 🔄 Exportar resultados em PDF

---

**⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!**

💡 **Dica:** Use as duas calculadoras em conjunto para um acompanhamento completo da sua saúde!
