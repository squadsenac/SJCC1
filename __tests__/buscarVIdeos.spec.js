
describe("função buscar vídeos", () =>{
    test("deve buscar vídeo usando parâmetros de busca(query, ordem, número de vídeos)", () =>{
        const parametros = [
            {query: "Sport Club do Recife", resultsPerPage: "10", order: "date" }
        ];

        expect(filterByTerm(parametros.query, parametros.resultsPerPage, parametros.order)).toEqual(expect.objectContaining({
            links: expect.any(Array),
            titulos: expect.any(Array),
            descritivos: expect.any(Array)
          }));

    });
});

