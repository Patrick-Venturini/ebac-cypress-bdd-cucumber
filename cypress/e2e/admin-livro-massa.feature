            # language: pt

            Funcionalidade: Administração de livros no Hub de Leitura
            Como administrador do sistema
            Quero adicionar, editar e remover múltiplos livros de uma só vez
            Para que eu possa gerenciar o catálogo de forma rápida e eficiente

            Cenário: Adicionar novos livros com tabela de exemplos
            Dado que eu estou na página de administrador de livros
            Quando eu adiciono novos livros com os seguintes dados:
            | titulo           | autor         | categoria | exemplares |
            | Livro de teste 1 | Autor teste 1 | Aventura  | 2          |
            | Livro de teste 2 | Autor teste 2 | Romance   | 30         |
            | Livro de teste 3 | Autor teste 3 | Aventura  | 300        |
            | Livro de teste 4 | Autor teste 1 | Aventura  | 2          |
            | Livro de teste 5 | Autor teste 1 | Infantil  | 2          |
            | Livro de teste 6 | Autor teste 1 | Aventura  | 2          |
            Então deve aparecer uma mensagem: "Livro adicionado com sucesso!"
            @only
            Esquema do Cenário: Adicionar livros usando esquema do cenário - Livro: "<titulo>"
            Dado que eu estou na página de administrador de livros
            Quando eu adiciono um livro com "<titulo>", "<autor>", "<categoria>" e "<exemplares>"
            Então deve aparecer uma mensagem: "Livro adicionado com sucesso!"

            Exemplos:
            | titulo                           | autor                         | categoria | exemplares |
            | Livro de teste 1                 | Autor teste 1                 | Aventura  | 2          |
            | Li                               | Autor teste 2                 | Infantil  | 30         |
            | Livro de teste com nome enorme 3 | Autor teste 3                 | Aventura  | 300        |
            | Livro de teste 4                 | Autor teste com nome enorme 4 | Biografia | 2          |
            | Livro de teste 5                 | A                             | Aventura  | 2          |
            | Livro de teste 6                 | Autor teste 1                 | Aventura  | 2          |
