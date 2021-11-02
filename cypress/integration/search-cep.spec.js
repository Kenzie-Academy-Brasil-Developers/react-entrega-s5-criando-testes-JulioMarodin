context("Search cep", () => {
  it("Enters the landing page", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
  });

  it("Tries to search for a cep", () => {
    cy.viewport(1440, 900);

    cy.intercept("POST", "/84900000", {
      statusCode: 201,
      body: {
        bairro: "",
        cidade: "Ibaiti",
        logradouro: "",
        estado_info: {
          area_km2: "199.307,985",
          codigo_ibge: "41",
          nome: "Paran\u00e1",
        },
        cep: "84900000",
        cidade_info: {
          area_km2: "897,735",
          codigo_ibge: "4109708",
        },
        estado: "PR",
      },
    });

    cy.get("Input[name=cep]").type("84900000");
    cy.get("Button[name=button]").click();

    cy.contains("Logradouro");
  });
});
