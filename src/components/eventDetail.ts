import type { SportEvent } from "../types/events";

export function renderEventDetail(container: HTMLElement, event: SportEvent): void {
    const homeTeam = event.homeTeam?.name ?? 'TBD'
    const awayTeam = event.awayTeam?.name ?? 'TBD'

    const date = new Date(event.dateVenue).toLocaleDateString('en', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    const time = event.timeVenueUTC.slice(0, 5)  // "16:00:00" → "16:00"

    const resultHTML = event.result 
    ? `<p class="detail-score">${event.homeTeam?.name ?? 'TBD'} 
       <strong>${event.result.homeGoals} — ${event.result.awayGoals}</strong> 
       ${event.awayTeam?.name ?? 'TBD'}</p>`
    : `<p class="detail-score">Result not available</p>`

      container.innerHTML = `
        <div class="event-detail">
            <button class="back-btn">&#8592; Back to calendar</button>
            <div class="detail-card">
                <div class="detail-header">
                    <span class="detail-competition">${event.originCompetitionName}</span>
                    <span class="detail-stage">${event.stage.name}</span>
                </div>
                <h2 class="detail-matchup">${homeTeam} vs ${awayTeam}</h2>
                <div class="detail-info">
                    <p>📅 ${date}</p>
                    <p>🕐 ${time} UTC</p>
                    <p>📊 Status: ${event.status}</p>
                </div>
                ${resultHTML}
            </div>
        </div>
    `

    container.querySelector('.back-btn')!.addEventListener('click', () => {
        import('./calendar').then(({ renderCalendar }) => renderCalendar(container))
    })
}