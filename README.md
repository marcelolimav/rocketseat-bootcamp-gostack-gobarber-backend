# Mapa das funcionalidades da aplicação
  - *Mapeamento de requisitos e regras de neócio.*
  - *RF: Requisitos funcionais*
  - *RNF: Requisitos não funcionais*
  - *RN: Regras de negócio*

## Recuperação de senha
  **RF**
    - O usuário deve poder recuperar sua senha informando seu e-mail;
    - O usuário deve receber um e-mail com instruções de recuperação de senha;
    - O usuário deve poder resetar sua senha;
  **RNF**
    - Utilizar Mailtrap para testar envios de e-mail em desenvolvimento;
    - Utilizar Amazon SES para envios em produção;
    - O envio de e-mails deve acontecer em segundo plano ( background job);
  **RN**
    - O link enviado para resetar a senha, deve expirar em 2h;
    - O usuário procisa confirmar a nova senha ao resetar sua senha;

## Atualização do perfil
  **RF**
    - O usuário deve poder atualizar seu nome, e-mail e senha;
  **RNF**
    - N/A
  **RN**
    - o usuário não pode alterar seu e-mail para um e-mail já utilizado;
    - Para atualizar sua senha, o usuário deve informar a senha antiga;
    - Para atualizar sua senha, o usuário precisa confirmar a nova senha;

## Painel do prestador
  **RF**
    - O usuário deve poder listar seus agendamentos de um dia específicos;
    - O prestador deve receber uma notificação sempre que houver um novo agendamento;
    - O prestador deve poder visualizar as notificações não lidas;
  **RNF**
    - Os agendamentos do pestador no dia devem ser armazenados em cache;
    - As notificações do prestador devem ser armazenadas no MongoDB;
    - As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

  **RN**
    - A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

## Agendamento de serviços
  **RF**
    - O usuário deve poder listar todos prestadores de serviço cadastrado;
    - O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
    - O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
    - O usuário deve poder realizar um novo agendamento com um prestador;
  **RNF**
    - A listagem de prestadores deve ser armazenada em cache;
  **RN**
    - Cada agendamento deve durar 1h exatamente;
    - Os agendamentos devem estar disponíveis entre as 8h às 18h ( Primeiro ás 08h, último às 17h);
    - O Usuário não pode agendar emum horário já ocupado;
    - O usuário não pode agendar em um horário que já passou;
    - O usuário não pode agendar serviços consigo mesmo;


