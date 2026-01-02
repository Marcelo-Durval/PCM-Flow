# 🏭 PCM Flow (V15 Final)

O **PCM Flow** é uma solução completa de **Planejamento e Controle de Manutenção**, focada na otimização do fluxo entre os setores de **Manutenção** e **Compras**.  
O sistema gerencia solicitações, controla o status de materiais **item a item**, gera **indicadores em tempo real** e garante **rastreabilidade total** via histórico.

---

## 🚀 Funcionalidades Principais

### 📊 Dashboard Inteligente
- **KPIs em Tempo Real**: Solicitações Abertas, Aguardando Aprovação, Valor em Carteira e Urgência Crítica
- **Gráficos Interativos**:
  - Status geral
  - Aging (Envelhecimento das solicitações)
  - Distribuição por Urgência
- **Calendário de Entregas**: Visualização mensal das previsões de entrega de materiais
- **Filtros de Data**: Análise retroativa ou futura com atualização dinâmica
- **Exportação**: Download de relatórios detalhados em Excel (.xlsx)

---

## 🛡️ Controle de Acesso e Perfil (RBAC)

### 🔐 Login Robusto
- Verificação de existência de **E-mail/Usuário antes da senha**
- Mensagens de erro claras e precisas

### 👤 Gestão de Perfil
- Alteração de **Avatar (foto de perfil)**
- Troca segura de **Senha** (exige senha atual)

### 🧑‍💼 Perfis de Usuário
- **Admin**: Acesso total e notificações de conclusão
- **Aprovador**: Aprovação de materiais de alto valor
- **Operador**: Preenchimento de dados de compras (AF, Fornecedor)
- **Manutenção**: Abertura e acompanhamento de solicitações

---

## 🔧 Fluxo de Trabalho

### 📋 Abertura de Solicitação
- Cadastro com:
  - OS (Atlas)
  - SC (Pirâmide)
  - Categoria
  - Urgência
  - Responsável

### 📦 Gestão de Materiais
- Adição manual ou **Importação em Massa via Excel**
- Mapeamento de colunas flexível
- Controle de saldo (**Quantidade Solicitada vs. Atendida**)

### 🛒 Compras & Suprimentos
- Campo dedicado para **Número da AF (Autorização de Fornecimento)**
- Controle de status individual:
  - Em cotação
  - Ag. aprovação
  - Aprovado
  - Ag. pagamento
  - Ag. entrega
  - Entregue
  - Cancelado

### 🤖 Automação de Status
- O status da solicitação (**Aguardando materiais**, **Concluído**, etc.) é atualizado automaticamente com base no status dos itens

---

## 🔔 Comunicação e Histórico
- **Chat / Log**:
  - Histórico imutável de ações (quem fez, o quê e quando)
  - Comentários manuais da equipe
- **Notificações Realtime**:
  - Badge de notificações
  - Toasts para novas ações
- **Alerta Admin**:
  - Notificação automática quando **todos os itens** de uma solicitação forem entregues

---

## 🛠️ Stack Tecnológica

### 🌐 Frontend
- HTML5
- CSS3 (Variáveis CSS para temas)
- JavaScript (ES6+ Vanilla)

### ⚙️ Backend (BaaS)
- **PocketBase v0.21.1**
  - Autenticação
  - Banco de Dados Realtime
  - Armazenamento de Arquivos

### 📚 Bibliotecas
- **Chart.js** — Visualização de dados
- **SheetJS (xlsx)** — Manipulação de planilhas Excel
- **FullCalendar** — Calendário interativo
- **PocketBase SDK** — Comunicação com o backend

---

## ⚙️ Configuração do Backend (PocketBase)

### 📁 Coleção `users`
- Manter campos padrão
- Campo adicional:
  - `perfil` (Select: admin, aprovador, operador, manutencao)
- Regra de API **List/Search** pública ou permitindo verificação de e-mail no login

---

### 📁 Coleção `acoes`
- `titulo` (Text)
- `descricao` (Text)
- `ordem_servico` (Text)
- `numero_sc` (Text)
- `categoria` (Select: Máquina parada, Segurança, Qualidade, Estoque)
- `urgencia` (Select: Alta, Média, Baixa)
- `responsavel` (Relation → users)
- `status` (Select: Aguardando materiais, Programado, Em execução, Concluído)

---

### 📁 Coleção `materiais`
- `acao_vinculada` (Relation → acoes)
- `descricao` (Text)
- `codigo_item` (Text)
- `quantidade` (Number)
- `qtd_atendida` (Number)
- `valor` (Number)
- `fornecedor` (Text)
- `num_af` (Text)
- `data_entrega` (Date)
- `urgencia_material` (Select: Alta, Média, Baixa)
- `status_compra` (Select: Em cotação, Ag. aprovação, Aprovado, Ag. pagamento, Ag. entrega, Entregue, Cancelado)

---

### 📁 Coleção `historico`
- `acao_vinculada` (Relation → acoes)
- `usuario` (Relation → users)
- `mensagem` (Text)
- `tipo` (Select: sistema, comentario)

---

## 🚀 Como Rodar

1. Baixe o executável do **PocketBase**
2. Inicie o servidor:
```bash
./pocketbase serve --http="127.0.0.1:8090"
```
3. Coloque o arquivo index.html na pasta pb_public
4. Acesse 
```bash
"http://127.0.0.1:8090"
```