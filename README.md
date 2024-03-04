
<img src="LKM-ToDosWeb-Front\src\assets\LKM-Tecnologia-Color-Branco.png">


# LKM - Tarefas

Teste Técnico de Desenvolvimento Full Stack para a LKM Tecnologia Ltda. com o objetivo de desenvolver uma aplicação que possa gerenciar uma lista de tarefas.


## Stack utilizada

**Front-end:** Angular, Bootstrap

**Back-end:** .NET 6, EF Core, JWT, SQL Server


## Funcionalidades - Autenticação

- Login usando email e senha

## Funcionalidades - Tarefas

- Listar todas as tarefas
- Buscar uma tarefa pelo Id
- Adicionar uma tarefa
- Atualizar uma tarefa
- Atualizar o estado de uma tarefa
- Deletar uma tarefa
## Documentação da API

#### Retorna todos as tarefas

```http
  GET /api/Tarefa
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `auth_token`| `string`   | **Obrigatório**. Autêntica a sua requisição |

#### Retorna uma tarefa conforme o ID

```http
  GET /api/Tarefa/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `auth_token`| `string`   | **Obrigatório**. Autêntica a sua requisição |
| `id`        | `string`   | **Obrigatório**. O Identificador da tarefa há ser buscada |

#### Adiciona uma tarefa

```http
  POST /api/Tarefa
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `auth_token`| `string`   | **Obrigatório**. Autêntica a sua requisição |
| `Tarefa`    | `tarefa`   | **Obrigatório**. Tarefa há ser cadastrada   |

#### Atualiza uma tarefa

```http
  PUT /api/Tarefa
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `auth_token`| `string`   | **Obrigatório**. Autêntica a sua requisição |
| `Tarefa`    | `tarefa`   | **Obrigatório**. Tarefa há ser atualizada   |

#### Atualiza o status de uma tarefa

```http
  PATCH /api/Tarefa
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `auth_token`| `string`   | **Obrigatório**. Autêntica a sua requisição |
| `id`        | `Guid`     | **Obrigatório**. Identificador da tarefa há ser atualizada |

#### Deleta uma tarefa

```http
  DELETE /api/Tarefa
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `auth_token`| `string`   | **Obrigatório**. Autêntica a sua requisição |
| `id`        | `Guid`     | **Obrigatório**. Identificador da tarefa há ser deletada |


## Rodando localmente 

Clone o projeto

```bash
  git clone https://github.com/dev-hyousuke/lkm-teste-tecnico-fullstack
```

Para rodar o projeto Front-end instale o Angular CLI

```bash
  npm i @angular/cli
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  ng serve
```

Para rodar o projeto Back-end instale runtime do .NET 6

- https://dotnet.microsoft.com/pt-br/download/dotnet/6.0



## Autores

- [@dev-hyousuke](https://www.github.com/dev-hyousuke)

