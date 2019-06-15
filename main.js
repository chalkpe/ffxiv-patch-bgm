import ffxiv from './ffxiv.js'
import PatchList from './components/patch-list.js'
import PatchView from './components/patch-view.js'
import MusicPlayer from './components/music-player.js'
import ExpansionButton from './components/expansion-button.js'

customElements.define('patch-list', PatchList)
customElements.define('patch-view', PatchView)
customElements.define('music-player', MusicPlayer)
customElements.define('expansion-button', ExpansionButton)

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header')
  ffxiv.expansions.forEach(exp => header.appendChild(ExpansionButton.create(exp)))
})