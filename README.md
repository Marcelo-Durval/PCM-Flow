# PCM Flow

**Sistema de Gestão de Urgências e Fluxo de Materiais para Manutenção Industrial.**

O **PCM Flow** é uma solução Fullstack desenvolvida para preencher a lacuna de comunicação entre o **PCM (Planejamento e Controle de Manutenção)** e o setor de **Compras**. Ele foca na rastreabilidade de solicitações urgentes, garantindo que paradas de fábrica sejam resolvidas com agilidade, transparência e dados em tempo real.

---

## 📋 Funcionalidades

- **Dashboard Gerencial:** Visualização de KPIs, status de materiais, urgências e envelhecimento da carteira (Aging).
- **Fluxo Manutenção <-> Compras:** Integração clara onde a manutenção abre a solicitação e compras atualiza o status.
- **Importação de Excel:** Capacidade de importar listas de materiais em massa via arquivos `.xlsx` ou `.csv`.
- **Comunicação em Tempo Real:** Notificações instantâneas e chat integrado em cada Ordem de Serviço.
- **Rastreabilidade:** Registro de histórico automático para todas as alterações (quem mudou, o que mudou e quando).
- **Controle de Acesso:** Visões distintas para perfis de **Operador** (Comprador) e **Gestor/Admin** (PCM).

---

## 🛠️ Tecnologias

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
- **Backend:** [PocketBase](https://pocketbase.io/) (Go framework com SQLite embutido).
- **Bibliotecas:** `Chart.js` (Gráficos), `SheetJS` (Excel).

---

## 🚀 Guia de Instalação

Como o sistema utiliza o PocketBase, ele é extremamente portátil. O banco de dados e o servidor web rodam a partir de um único arquivo executável.

### 1. Clonar o Repositório

Baixe o código fonte para uma pasta em seu computador:

```bash
git clone https://github.com/SEU_USUARIO/pcm-flow.git
cd pcm-flow
```

### 2. Baixar o PocketBase

O executável do servidor não é incluído no Git. Você deve baixá-lo manualmente:

- Acesse: https://pocketbase.io/docs/
- Baixe a versão correspondente ao seu sistema operacional (Linux, Windows ou Mac).
- Extraia o arquivo `pocketbase` (ou `pocketbase.exe`) e coloque-o na raiz da pasta `pcm-flow`.

### 3. Iniciar o Sistema (Modo Local)

Abra o terminal na pasta do projeto e execute:

**Linux / Mac**
```bash
./pocketbase serve
```

**Windows (PowerShell)**
```powershell
.\pocketbase.exe serve
```

> **Nota Importante:**  
> Na primeira execução, o sistema lerá a pasta `pb_migrations` e criará automaticamente o banco de dados (`pb_data`) com todas as tabelas e configurações necessárias.

### 4. Criar o Primeiro Usuário (Admin)

Com o servidor rodando, abra o navegador e acesse o Painel Admin:

```
http://127.0.0.1:8090/_/
```

- Crie sua conta de administrador (E-mail e Senha).
- *(Opcional)* Vá na coleção `users` e crie outros usuários para sua equipe, definindo o campo `perfil` como `admin` ou `operador`.

---

## 🌐 Colocando na Rede (Modo Produção / Empresa)

Para que outros computadores da sua rede Wi-Fi ou LAN acessem o sistema:

### 1. Descubra seu IP

No terminal do servidor, digite:

- **Linux:** `ip addr`
- **Windows:** `ipconfig`

Anote seu endereço IP (ex: `192.168.2.223`).

### 2. Inicie o Servidor Liberado

Pare o servidor atual (`Ctrl + C`) e inicie com o comando abaixo para aceitar conexões externas:

```bash
./pocketbase serve --http="0.0.0.0:8090"
```

### 3. Libere o Firewall (Apenas Linux)

Se estiver usando Linux (Ubuntu / Pop!_OS), libere a porta 8090:

```bash
sudo ufw allow 8090
```

### 4. Acesso dos Usuários

Agora, qualquer pessoa na mesma rede pode acessar o sistema digitando no navegador:

```
http://SEU_IP:8090
```

Exemplo:
```
http://192.168.2.223:8090
```

---

## 📖 Como Utilizar

### Perfil: PCM (Manutenção)

**Login:**  
Acesse o sistema. A tela inicial será o **Dashboard**.

**Criar Solicitação:**
1. Vá no menu **Manutenção**.
2. Clique em **+ Nova Solicitação**.
3. Preencha **Título**, **Descrição**, **Categoria** e **Urgência**.
4. Se disponível, informe o Nº da **OS (Atlas)** ou **SC (Pirâmide)**.

**Adicionar Materiais:**
- Ao salvar, a tela de detalhes abrirá.
- Adicione itens individualmente ou clique em **Importar Excel** para carregar uma lista massiva.

**Acompanhamento:**
- Utilize os filtros na tela de manutenção para acompanhar solicitações pendentes, em andamento ou concluídas.

---

### Perfil: Compras (Operador)

**Login:**  
O sistema direciona automaticamente para a tela de **Compras**.

**Visualizar Pendências:**
- A tabela exibe todos os itens solicitados pelo PCM.

**Atualizar Status:**
- Altere o status do item (ex: *Em cotação* → *Aguardando entrega*).
- Preencha os campos de **AF/Pedido**, **Valor** e **Previsão de Entrega** diretamente no card do item (clicando em **Ver SC**).

**Comunicação:**
- Utilize o chat lateral dentro da SC para informar atrasos ou esclarecer dúvidas com o solicitante.

---

## 🔔 Funcionalidades Transversais

- **Notificações:** O ícone de sino no topo alerta sobre novos itens, mudanças de status ou mensagens no chat.
- **Dashboard:** Atualize a página para visualizar gráficos:
  - Pizza: **Status**
  - Barras: **Urgência**
  - Linha: **Envelhecimento (Aging)**  
  Todos atualizados em tempo real.