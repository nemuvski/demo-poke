describe('出力される要素の数について評価', function () {
  it('初期表示は50個のカード要素が並ぶ', function () {
    cy.visit('/')

    cy.get('.pokemon-card').its('length').should('equal', 50)
  })

  it('次ページを読み込むと100個のカード要素が並ぶ', function () {
    cy.visit('/')

    cy.get('.pokemon-list > button').scrollIntoView()
    // タイミングが早すぎると要素がレンダリングされない状態で評価されてしまうため、遅延させる
    cy.wait(5000)
    // 1ページ目（初期表示）で50件、そして2ページ目で追加で50件が表示される
    cy.get('.pokemon-card').its('length').should('equal', 100)
  })
})
