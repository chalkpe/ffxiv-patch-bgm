import ffxiv from '../ffxiv.js'
import PatchView from './patch-view.js'

export default class PatchList extends HTMLElement {
  constructor() {
    super()
    const template = document.getElementById('patch-list')
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
  }

  connectedCallback () {
    const list = this.shadowRoot.querySelector('.patches')

    document.addEventListener('ExpansionChange', ({ detail }) => {
      while (list.hasChildNodes()) list.removeChild(list.lastChild)

      const exp = ffxiv.expansions.find(exp => exp.name === detail)
      if (exp) exp.patches.forEach(p => list.appendChild(PatchView.create(p)))
    })
  }
}