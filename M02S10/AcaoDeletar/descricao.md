### 🗑️ **Melhoria: Implementar a exclusão de um post**

Adicione a funcionalidade de excluir um post diretamente da interface. Para isso:

1. No componente `Post`, crie uma **prop chamada** `handleDelete`.
2. Essa função será chamada ao clicar no botão **"Excluir"**, e deve receber o `id` **do post** como argumento.
3. A função `handleDelete` será responsável por:
   - Remover o post correspondente do `localStorage`.
   - Atualizar o estado da lista de posts exibidos em tela, garantindo que o post removido desapareça da visualização imediatamente.

> 💡 **Dica:** Certifique-se de que cada post tenha um identificador único (por exemplo, um campo `id`) para facilitar a exclusão.
