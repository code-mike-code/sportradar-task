import bg1 from '../assets/bg-1.png'
import bg2 from '../assets/bg-2.png'
import bg3 from '../assets/bg-3.png'
import bg4 from '../assets/bg-4.png'

const backgrounds = [bg1, bg2, bg3, bg4]

export function setRandomBackground(): void {
  const index = Math.floor(Math.random() * backgrounds.length)
  document.body.style.backgroundImage = `url(${backgrounds[index]})`
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundPosition = 'center'
  document.body.style.backgroundAttachment = 'fixed'
}
