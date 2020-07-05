# Mercado Local

Repositório da aplicação desenvolvida durante o 3º MegaHack.

-**Desafio Mercado Livre**: Buscar uma forma de conectar ainda mais as pessoas mesmo com o distanciamento social.

-**Proposta**: Uma solução que de mais visibilidade, dentro do Mercado Livre, para os comerciantes locais, de forma que possibilite uma maior interação com a sua localidade bem como proporcione mais negócios.

# A Aplicação (protótipo)

A aplicação foi desenvolvida utilizando  **React JS** e  todas as funcionalidades foram criadas consumindo a API disponibilizada pelo Mercado livre. 

### Funcionamento
O usuário se conecta na aplicação, fazemos uma chamada para a API do ML para listar os estados (apenas Brasil, nesse protótipo) e as categorias, que são pré-requisitos para compor o resto do conteúdo,  e na sequência utilizamos um serviço de geolocalização por IP para poder carregar o conteúdo da página de acordo com a cidade do usuário.

### Tecnologias

 1. React JS
 2. Axios
 3. Bootstrap
 4. ip-api.com