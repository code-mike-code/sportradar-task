import { renderCalendar } from './calendar'

export function renderNavbar(container: HTMLElement, appContainer: HTMLElement): void {
  container.innerHTML = `
    <nav class="navbar">
      <div class="navbar-brand">Sports Calendar</div>
      <div class="navbar-links">
        <button class="nav-btn active" data-view="calendar">Calendar</button>
        <button class="nav-btn" data-view="add-event">Add Event</button>
      </div>
    </nav>
  `

  const buttons = container.querySelectorAll('.nav-btn')

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Usuń klasę active ze wszystkich, dodaj do klikniętego
      buttons.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')

      const view = (btn as HTMLElement).dataset.view

      if (view === 'calendar') {
        renderCalendar(appContainer)
      } else if (view === 'add-event') {
        import('./addEventForm.ts').then(({ renderAddEventForm }) => {
          renderAddEventForm(appContainer)
        })
      }
    })
  })
}
