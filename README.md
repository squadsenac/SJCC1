# SJCC1
## Gerador de Layouts de Vídeo para Páginas HTML

### Instruções para uso e testes no backend:

- Possui frontend de teste na pasta **/public** (usar o index.html)
- As rotas estão em **routes/index.js**
- É necessária uma chave de API para a API **Youtube Data Api V3** para o servidor funcionar. Trocar a variável **process.env.YT_API_KEY** no arquivo **/search/buscar-videos.js** pela chave e ativar a busca no Youtube.
- É necessário substituir a variável **process.env.JCTV_CHANNEL_ID** pelo id do canal do Youtube. No caso os do Sistema Jornal do Commércio de Comunicação: **UCe1XGNDeEwAx5xaLGcNPEbQ**(TV Jornal) ou **UC8ix2uXYlGaKFrNxm6BNH-g**(JC TV). 
- Usar o **npm install** no console para instalar as dependências.
- O frontend de teste é ativado usando o Live Server do **Visual Studio Code** com a porta local **http://127.0.0.1:5500/**
- Para testar a busca no navegador sem o frontend é necessário usar a porta local **3000** e preencher a rota **"http://localhost:3000/gerar-layouts/:optLayout/:titRodape/:query/:resultsPerPage/:order"**, substituindo as variáveis por parâmetros de busca. 
- Os parâmetros de busca são os que seguem:
      `optLayout`: Tipo de layout de vídeo. São 5: lista, mosaico, thumbnails, lista+thumbnails e mosaico+thumbnails;
      `query`: Tema da busca a ser executada. Exemplo: Sport, Política, Cotidiano, etc;
      `resultsPerPage`: Número máximo de vídeos a aparecerem na pesquisa;
      `order`: Ordem de aparição dos vídeos. O padrão é `relevance`(relevância). Os outros são: `date`(data), `viewCount`(visualizações), `rating`(avaliação dos    usuários) e `title`(ordem alfabética de título).
      

### Nota importante: com o *deploy* terminado as instruções anteriores não serão necessárias. Elas são apenas para teste em fase de desenvolvimento.
