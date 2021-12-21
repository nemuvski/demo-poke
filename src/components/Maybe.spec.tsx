import React from 'react'
import { mount } from '@cypress/react'
import Maybe from '~/components/Maybe'

describe('[Component] Maybe', function () {
  it('子要素が出力される', function () {
    mount(
      <div id='parent'>
        <Maybe test={true}>Hide and seek</Maybe>
      </div>
    )

    cy.get('div#parent').should('not.be.empty')
  })

  it('子要素が出力されない', function () {
    mount(
      <div id='parent'>
        <Maybe test={false}>Hide and seek</Maybe>
      </div>
    )

    cy.get('div#parent').should('be.empty')
  })
})
