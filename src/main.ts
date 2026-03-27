import './style.css'
import { renderCalendar } from './components/calendar'
import { renderNavbar } from './components/navbar'

const navbar = document.querySelector<HTMLElement>('#navbar')!
const app = document.querySelector<HTMLDivElement>('#app')!

renderNavbar(navbar, app)
renderCalendar(app)