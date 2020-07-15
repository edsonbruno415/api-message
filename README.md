# API-MENSAGEM

### Objetivo
* Construir uma api em NodeJS utilizando o ExpressJS que armazene e consulte a mensagem cadastrada de acordo com os endpoints da aplicação.

Acesse o projeto em: https://api-mensagem.herokuapp.com/

#### Como utilizar

* /memory_usage - retorna as informações de memória utilizada na instância atual.
* /message - retorna uma mensagem armazenada.
* /message/<string> - cadastra uma mensagem.

#### Requisitos

* A aplicação deverá ser criada, obrigatoriamente, utilizando Node.js.
* A aplicação deverá ser hospedada em uma instância EC2 da Amazon Web Services (é possível criar uma gratuitamente)
* A aplicação deverá ser salva no GitHub.
* BÔNUS: Onde possível, usar a sintaxe async/await para tratar as assincronias.
* A aplicação deverá atender ao protocolo HTTP com as seguintes respostas (dica: Express.js)
  * GET /memory_usage
    * Deverá retornar a quantidade de memória RAM utilizada pelo processo do Node.js.
  * GET /message
    * Deverá retornar a <string> salva pelo POST.
      * Quando a <string> for vazia, deverá retornar o status 419.
      * BÔNUS: Quando a <string> for passível de conversão a um número inteiro, a resposta ao cliente deverá ter um atraso de <string> milissegundos.
  * POST /message/<string>
    * Deverá aceitar uma <string> que será salva e retornada pelo GET /message (não precisa se preocupar em tratar espaços ou caracteres especiais). Retorna o status 204.
  * MEGABÔNUS: GET /live
    * Deverá retornar a <string> e atualizar em tempo real, usando socket.io (https://socket.io/).
* Na instância, deverá ser instalado o programa netdata (https://github.com/netdata/netdata) para expor um painel de monitoramento de recursos.
* BÔNUS: o acesso ao painel deverá ser protegido por usuário e senha (DICA: Nginx).
* BÔNUS: A instância deve iniciar o processo do Node.js automaticamente em caso de travamento, reboot ou desligamento acidental.
* BÔNUS: a <string> deverá ser salva ou persistida de alguma maneira para não ser perdida em casos de restart do processo, reboot ou desligamento da instância.
