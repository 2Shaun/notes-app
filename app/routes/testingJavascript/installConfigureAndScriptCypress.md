- cy.visit.findBy().click().findBy() ~ cy.visit.findBy(); cy.visit.findBy();
- only use findBy()
- in your sourcecode, you can add `if(window.Cypress)` then set local variables, such as Redux store, to `window.store = store` so that you can check the redux store while debugging tests
- you can also add `.then(subject => {debugger; return subject;})` in your test chain so that Chrome debugger will display while you are running your tests
- if you're developing a page that takes a while to get to, you can have cypress navigate to that page for you, and use cypress as your tool for development (`it.only()` will make only that test run)
- you can pin requests by clicking on them in the runner sidepanel and analyze them in the console
- `cy.server().route({method: , url: , status: , response: })` will intercept http requests
- `cy.request({method: , url: , body: }).then(response => {})` will allow cypress to make requests
- you can make new cypress methods with `Cypress.Commands.add('', )`