Continuando o projeto anterior, crie um novo componente(tela) Chamado PostsList.jsx e renderize no componente main.jsx.

‌

Observação:

Casa não tenha finalizado o exercício anterior, adicione o seguinte trecho no seu arquivo main.jsx para inserir manualmente no local storage 2 posts.


```
const posts = [
  {
    id: 1,
    titulo: "Inteligência Artificial no Dia a Dia",
    descricao:
      "Como a IA está revolucionando serviços e impactando decisões em empresas e governos.",
    capa: "https://totalip.com.br/wp-content/uploads/2023/08/A-tecnologia-impulsiona-o-futuro-do-Brasil.png",
    data: "2025-07-15",
    tipo: "Artigo",
  },
  {
    id: 2,
    titulo: "5 Tendências Tech para 2026",
    descricao:
      "De computação quântica ao metaverso corporativo, conheça o que vem por aí.",
    capa: "https://totalip.com.br/wp-content/uploads/2023/08/A-tecnologia-impulsiona-o-futuro-do-Brasil.png",
    data: "2025-07-10",
    tipo: "Notícia",
  }
];

localStorage.setItem("posts", JSON.stringify(posts));
```
<img width="1257" height="788" alt="image" src="https://github.com/user-attachments/assets/6fed7369-31c8-41a5-bc76-7bd451cb871f" />

<img width="1255" height="934" alt="image" src="https://github.com/user-attachments/assets/1ad25ee5-d139-42fa-9fbb-a47d2841ab8d" />
