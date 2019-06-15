import { copyDataset } from '../util.js'

export default class PatchView extends HTMLElement {
  constructor () {
    super()
    const template = document.getElementById('patch-view')
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
  }

  connectedCallback () {
    const img = this.shadowRoot.querySelector('.logo')
    img.setAttribute('src', this.dataset.logo)
    img.setAttribute('title', `패치 ${this.dataset.version} ${this.dataset.displayName}`)
    img.addEventListener('click', this.onClick.bind(this))
  }

  onClick () {
    document.dispatchEvent(new CustomEvent('BGMChange', { detail: this.dataset }))
  }

  static create (data) {
    return copyDataset(document.createElement('patch-view'), data)
  }
}
