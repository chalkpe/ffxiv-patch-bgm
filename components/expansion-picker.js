import ffxiv from '../ffxiv.js'
import PatchPicker from './patch-picker.js'

export default class ExpansionPicker extends HTMLElement {
  constructor () {
    super()
    const template = document.getElementById('expansion-picker')
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
  }

  connectedCallback () {
    for (const e of ffxiv.expansions) {
      const img = this.shadowRoot.appendChild(document.createElement('img'))
      img.setAttribute('src', e.logo)
      img.setAttribute('title', `${e.version} - ${e.displayName}`)
      img.addEventListener('click', () => {
        ExpansionPicker.change(e)
        PatchPicker.change(e.version === e.patches[0].version && e.patches[0])
      })
    }

    console.log(ffxiv)
  }

  static change (expansion) {
    if (expansion) document.dispatchEvent(new CustomEvent('ExpansionChanged', { detail: expansion }))
  }
}