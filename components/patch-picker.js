export default class PatchPicker extends HTMLElement {
  constructor() {
    super()
    const template = document.getElementById('patch-picker')
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
  }

  connectedCallback () {
    let current = null
    const list = this.shadowRoot.querySelector('.patches')

    document.addEventListener('ExpansionChanged', ({ detail: e }) => {
      if (current === e.version) return
      current = e.version

      list.innerHTML = ''
      for (const p of e.patches) {
        if (e.version === p.version) continue

        const img = list.appendChild(document.createElement('img'))
        img.setAttribute('src', p.logo)
        img.setAttribute('title', `패치 ${p.version} ${p.displayName}`)
        img.onclick = () => PatchPicker.change(p)
      }
    })
  }

  static change (patch) {
    if (patch) document.dispatchEvent(new CustomEvent('PatchChanged', { detail: patch }))
  }
}