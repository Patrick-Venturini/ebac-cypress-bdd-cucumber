            # language: pt
            Funcionalidade: Login
            Como um usuário do sistema Hub de Leitura
            Quero fazer Login
            Para que eu possa entrar no sistema

            Cenário: Login válido
            Dado que eu estou na tela de Login
            Quando eu digito o usuario e senha com os seguintes dados:
            | usuario              | senha    | nome                |
            | admin@biblioteca.com | admin123 | Bibliotecário Admin |
            | usuario@teste.com    | user123  | Usuário Padrão      |
            Então devo ser redirecionado para o dashboard

            Esquema do Cenário: Login inválido - Com usuários não cadastrados e/ou senha errada
            Dado que eu estou na tela de Login
            Quando eu digito um usuario com "<usuario>", "<senha>"
            Então deve aparecer a mensagem de erro: "<mensagem>"

            Exemplos:
            | usuario              | senha    | mensagem                   |
            | admin@teste.com      | abc@123  | Email ou senha incorretos. |
            | admin@biblioteca.com | user123  | Email ou senha incorretos. |
            | usuario@teste.com    | admin123 | Email ou senha incorretos. |

            Esquema do Cenário: Login inválido - Com email inválido
            Dado que eu estou na tela de Login
            Quando eu digito um usuario com "<usuario>", "<senha>"
            Então deve aparecer a mensagem de validação: "<mensagem>"

            Exemplos:
            | usuario         | senha    | mensagem                           |
            | admin.teste.com | abc@123  | Por favor, insira um email válido. |
            | @biblioteca.com | user123  | Por favor, insira um email válido. |
            | usuario@.com    | admin123 | Por favor, insira um email válido. |

