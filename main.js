import MusicPlayer from './components/music-player.js'
import PatchPicker from './components/patch-picker.js'
import ExpansionPicker from './components/expansion-picker.js'

document.addEventListener('DOMContentLoaded', () => {
  customElements.define('music-player', MusicPlayer)
  customElements.define('patch-picker', PatchPicker)
  customElements.define('expansion-picker', ExpansionPicker)
})