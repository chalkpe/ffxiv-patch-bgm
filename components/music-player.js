export default class MusicPlayer extends HTMLElement {
  constructor () {
    super()
    const template = document.getElementById('music-player')
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
  }

  connectedCallback () {
    this.audio = this.shadowRoot.querySelector('audio')
    this.status = this.shadowRoot.querySelector('.status')
    document.addEventListener('PatchChanged', e => this.onPatchChange(e.detail))

    this.pause()
  }

  pause (text = '재생 중인 음악 없음') {
    this.audio.pause()
    this.status.textContent = text
  }

  onPatchChange (p) {
    if (p.bgm === this.audio.src) return
    this.pause('음악 바꾸는 중...')

    this.audio.src = p.bgm
    this.audio.load()
    this.audio.oncanplaythrough = () => {
      this.audio.play()
      this.status.textContent = `재생 중 — Patch ${p.version} ${p.displayName}`
      this.status.onclick = () => this.pause() || window.open(p.notes, '_blank').focus()
    }
  }
}