import { addEvent } from '../services/eventService'
import type { SportEvent } from '../types/events'

export function renderAddEventForm(container: HTMLElement): void {
  container.innerHTML = `
    <div class="form-wrapper">
      <h2 class="form-title">Add New Event</h2>
      <form class="event-form" id="add-event-form">
        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div class="form-group">
          <label for="time">Time (UTC)</label>
          <input type="time" id="time" name="time" required />
        </div>
        <div class="form-group">
          <label for="competition">Competition</label>
          <input type="text" id="competition" name="competition" placeholder="e.g. UEFA Champions League" required />
        </div>
        <div class="form-group">
          <label for="home-team">Home Team</label>
          <input type="text" id="home-team" name="home-team" placeholder="e.g. Real Madrid" required />
        </div>
        <div class="form-group">
          <label for="away-team">Away Team</label>
          <input type="text" id="away-team" name="away-team" placeholder="e.g. Barcelona" required />
        </div>
        <button type="submit" class="submit-btn">Add Event</button>
      </form>
      <p class="form-note">Note: events are added for the current session only.</p>
    </div>
  `

  const form = document.getElementById('add-event-form') as HTMLFormElement

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const date = (document.getElementById('date') as HTMLInputElement).value
    const time = (document.getElementById('time') as HTMLInputElement).value
    const competition = (document.getElementById('competition') as HTMLInputElement).value
    const homeTeamName = (document.getElementById('home-team') as HTMLInputElement).value
    const awayTeamName = (document.getElementById('away-team') as HTMLInputElement).value

    const newEvent: SportEvent = {
      season: new Date(date).getFullYear(),
      status: 'scheduled',
      dateVenue: date,
      timeVenueUTC: `${time}:00`,
      stadium: null,
      homeTeam: {
        name: homeTeamName,
        officialName: homeTeamName,
        slug: homeTeamName.toLowerCase().replace(/\s+/g, '-'),
        abbreviation: homeTeamName.slice(0, 3).toUpperCase(),
        teamCountryCode: '',
        stagePosition: null
      },
      awayTeam: {
        name: awayTeamName,
        officialName: awayTeamName,
        slug: awayTeamName.toLowerCase().replace(/\s+/g, '-'),
        abbreviation: awayTeamName.slice(0, 3).toUpperCase(),
        teamCountryCode: '',
        stagePosition: null
      },
      result: null,
      stage: { id: 'CUSTOM', name: 'CUSTOM', ordering: 0 },
      group: null,
      originCompetitionId: competition.toLowerCase().replace(/\s+/g, '-'),
      originCompetitionName: competition
    }

    addEvent(newEvent)
    form.reset()

    const note = container.querySelector('.form-note')!
    note.textContent = `✓ Event added: ${homeTeamName} vs ${awayTeamName} on ${date}`
    note.classList.add('form-success')
  })
}
