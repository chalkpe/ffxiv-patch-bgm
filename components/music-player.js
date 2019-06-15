export default class MusicPlayer extends HTMLElement {
  constructor () {
    super()
    const template = document.getElementById('music-player')
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
  }

  connectedCallback () {
    this.audio = this.shadowRoot.querySelector('audio')
    this.status = this.shadowRoot.querySelector('.status')
    this.pause()
    
    document.addEventListener('BGMChange', ({ detail }) => this.play(detail))
  }

  pause () {
    this.audio.pause()
    this.status.textContent = '재생 중인 음악 없음'
  }

  play (patch) {
    this.pause()
    this.status.textContent = '음악 바꾸는 중...'

    this.audio.src = patch.bgm
    this.audio.load()

    this.audio.oncanplaythrough = () => {
      this.audio.play()
      this.status.textContent = `재생 중 — Patch ${patch.version} ${patch.displayName}`
      this.status.onclick = () => {
        this.pause()
        window.open(patch.notes, '_blank').focus()
      }
    }
  }
}