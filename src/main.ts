import './style.css'
import { renderCalendar } from './components/calendar'
import { renderNavbar } from './components/navbar'
import { setRandomBackground } from './utils/background'


const navbar = document.querySelector<HTMLElement>('#navbar')!
const app = document.querySelector<HTMLDivElement>('#app')!

renderNavbar(navbar, app)
renderCalendar(app)
setRandomBackground()