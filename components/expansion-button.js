import { copyDataset } from '../util.js'

export default class ExpansionButton extends HTMLElement {
  constructor () {
    super()
    const template = document.getElementById('expansion-button')
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
  }

  connectedCallback () {
    const img = this.shadowRoot.querySelector('img')
    img.setAttribute('src', this.dataset.logo)
    img.setAttribute('alt', this.dataset.displayName)
    img.addEventListener('click', this.onClick.bind(this))
  }

  onClick () {
    document.dispatchEvent(new CustomEvent('ExpansionChange', { detail: this.dataset.name }))
  }

  static create (data) {
    return copyDataset(document.createElement('expansion-button'), data)
  }
}