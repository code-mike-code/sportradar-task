import { getEvents } from '../services/eventService'
// import type { SportEvent } from '../types/events'

function getCalendarDays(year: number, month: number): (number | null)[] {
    const firstDay = new Date(year, month, 1).getDay() // 0=sunday, 1=monday
    const daysInMonth = new Date(year, month + 1, 0).getDate() // how many days is in a month

    // In Europe, week starts on Monday not Sunday
    const offset = (firstDay === 0) ? 6 : firstDay - 1

    const days: (number | null)[] = []

    // empty cells before first day of a month
    for ( let i = 0; i < offset; i++ ) {
        days.push(null)
    }

    // Correct days of a month
    for ( let i = 1; i <= daysInMonth; i++ ) {
        days.push(i)
    }

    return days
}


export function renderCalendar(container: HTMLElement): void {
    const today = new Date()
    let currentYear = today.getFullYear()
    let currentMonth = today.getMonth()

    function render(): void {
        const days = getCalendarDays(currentYear, currentMonth)
        const monthName = new Date(currentYear, currentMonth).toLocaleDateString('en', { month: 'long'})

        const events = getEvents()

        container.innerHTML = `
            <div class="calendar">
                <div class="calendar-header">
                <button id="prev-month">&#8592;</button>
                <h2>${monthName} ${currentYear}</h2>
                 <button id="next-month">&#8594;</button>
                </div>
                <div class="calendar-grid">
                <div class="day-label">Mon</div>
                <div class="day-label">Tue</div>
                <div class="day-label">Wed</div>
                <div class="day-label">Thu</div>
                <div class="day-label">Fri</div>
                <div class="day-label">Sat</div>
                <div class="day-label">Sun</div>
                ${days.map(day => {
                    if (day === null) return `<div class="day-cell empty"></div>`

                    const month = String(currentMonth + 1).padStart(2, '0')  // 1 → "01"
                    const dayStr = String(day).padStart(2, '0')              // 3 → "03"
                    const dateStr = `${currentYear}-${month}-${dayStr}`

                    const dayEvents = events.filter(e => e.dateVenue === dateStr)
                    const hasEvents = dayEvents.length > 0

                    return `
                        <div class="day-cell ${hasEvents ? 'has-events' : ''}" data-date="${dateStr}">
                        <span class="day-number">${day}</span>
                        ${hasEvents ? `<span class="event-dot"></span>` : ''}
                        </div>
                    `
                    }).join('')}
                </div>
            </div>
            `
            
            document.getElementById('prev-month')!.addEventListener('click', () => {
                currentMonth--
                if (currentMonth < 0) { currentMonth = 11; currentYear-- }
                render()
            })

            document.getElementById('next-month')!.addEventListener('click', () => {
                currentMonth++
                if (currentMonth > 11) { currentMonth = 0; currentYear++ }
                render()
            })
    }
    render()
}
