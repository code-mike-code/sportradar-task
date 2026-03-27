import './style.css'
import { renderCalendar } from './components/calendar'

const app = document.querySelector<HTMLDivElement>('#app')!

renderCalendar(app)