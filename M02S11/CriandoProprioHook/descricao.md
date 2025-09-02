Tanto na tela de **listagem em cards** quanto na de **listagem em tabela**, é necessário fazer uma requisição `GET` à API para buscar os instrumentos cadastrados.

Para evitar duplicação de código e melhorar a organização do projeto, considere a criação de um **hook customizado**, por exemplo: `useGetInstruments`.

Esse hook será responsável por:

- Fazer a chamada à API `GET /equipamentos`.
- Gerenciar os estados de **carregamento**, **erro** e **dados**.
- Ser reutilizável em qualquer componente que precise dessa informação.
