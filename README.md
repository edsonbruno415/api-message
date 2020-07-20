# API-MENSAGEM

### Objetivo
* Construir uma api em NodeJS utilizando o ExpressJS que armazene e consulte a mensagem cadastrada de acordo com os endpoints da aplicação.

Acesse o projeto em: https://api-mensagem.herokuapp.com/

#### Como utilizar

* GET /memory_usage - retorna as informações de memória utilizada na instância atual.
* GET /message - retorna uma mensagem armazenada.
* POST /message/\<string\> - cadastra uma mensagem.
* POST /message/-1 - excluir mensagem armazenada.

#### Requisitos

* :heavy_check_mark: A aplicação deverá ser criada, obrigatoriamente, utilizando Node.js.
* A aplicação deverá ser hospedada em uma instância EC2 da Amazon Web Services (é possível criar uma gratuitamente)
* :heavy_check_mark: A aplicação deverá ser salva no GitHub.
* :heavy_check_mark: BÔNUS: Onde possível, usar a sintaxe async/await para tratar as assincronias.
* :heavy_check_mark: A aplicação deverá atender ao protocolo HTTP com as seguintes respostas (dica: Express.js)
  * :heavy_check_mark: GET /memory_usage
    * :heavy_check_mark: Deverá retornar a quantidade de memória RAM utilizada pelo processo do Node.js.
  * :heavy_check_mark: GET /message
    * :heavy_check_mark: Deverá retornar a <\string\> salva pelo POST.
      * :heavy_check_mark: Quando a <string> for vazia, deverá retornar o status 419.
      * BÔNUS: Quando a <string> for passível de conversão a um número inteiro, a resposta ao cliente deverá ter um atraso de <string> milissegundos.
  * :heavy_check_mark: POST /message/<string>
    * :heavy_check_mark: Deverá aceitar uma <string> que será salva e retornada pelo GET /message (não precisa se preocupar em tratar espaços ou caracteres especiais). Retorna o status 204.
  * MEGABÔNUS: GET /live
    * Deverá retornar a \<string\> e atualizar em tempo real, usando socket.io (https://socket.io/).
* Na instância, deverá ser instalado o programa netdata (https://github.com/netdata/netdata) para expor um painel de monitoramento de recursos.
* BÔNUS: o acesso ao painel deverá ser protegido por usuário e senha (DICA: Nginx).
* BÔNUS: A instância deve iniciar o processo do Node.js automaticamente em caso de travamento, reboot ou desligamento acidental.
* :heavy_check_mark: BÔNUS: a \<string\> deverá ser salva ou persistida de alguma maneira para não ser perdida em casos de restart do processo, reboot ou desligamento da instância.
