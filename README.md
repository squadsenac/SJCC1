# SJCC1
## Gerador de Layouts de Vídeo para Páginas HTML

- Possui frontend de teste na pasta **/public** (usar o index.html)
- As rotas estão em **routes/index.js**
- É necessária uma chave de API para a API **Youtube Data Api V3** para o servidor funcionar. Trocar a variável **process.env** no arquivo **/search/buscar-videos.js** para inserir a chave e ativar a busca no Youtube.
- Usar o **npm install** no console para instalar as dependências.
- O frontend de teste é ativado usando o Live Server do **Visual Studio Code** com a porta local **http://127.0.0.1:5500/**
- Para testar a busca no navegador sem o frontend é necessário usar a porta local **3000** e preencher a rota **"http://localhost:3000/gerar-layouts/:optLayout/:titRodape/:query/:resultsPerPage/:order"**, substituindo as variáveis por parâmetros de busca. 
- Os parâmetros de busca são os que seguem:
      - `optLayout`: Tipo de layout de vídeo. São 5: lista, mosaico, thumbnails, lista+thumbnails e mosaico+thumbnails.
      - `query`: Tema da busca a ser executada. Exemplo: Sport, Política, Cotidiano, etc.
      - `resultsPerPage`: Número máximo de vídeos a aparecerem na pesquisa.
      - `order`: Ordem de aparição dos vídeos. O padrão é `relevance`(relevância). Os outros são: `date`(data), `viewCount`(visualizações), `rating`(avaliação dos    usuários) e `title`(ordem alfabética de título). 
