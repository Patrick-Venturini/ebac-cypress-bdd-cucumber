# language: pt
Funcionalidade: Administrar livros no Hub de Leitura
Como um administrador do sistema Hub de Leitura
Quero adicionar, editar e remover livros
Para que eu possa manter o catálogo atualizado

Cenário: Adicionar um novo livros
Dado que eu estou na página de administrador de livros
Quando eu adiciono um livro com os dados obrigatórios
Então deve aparecer uma mensagem: "Livro adicionado com sucesso!"


Cenário: Editar um livro existente
Dado que eu estou na página de administrador de livros
E existe um livro listado no catálogo
Quando eu eudito os detalhes do livro
Então deve aparecer uma mensagem de atualização: "Livro atualizado com sucesso!"

@only
Cenário: Remover um livro existente
Dado que eu estou na página de administrador de livros
E existe um livro listado no catálogo
Quando eu removo o livro do catálogo
Então deve aparecer uma mensagem de exclusão: "Livro excluído com sucesso!"
