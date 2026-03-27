import data from '../data/data.json'
import type { SportEvent } from '../types/events'

// Copy of data in memory, this is where we will add new events
let events: SportEvent[] = data.data as SportEvent[]

// Returns all events
export function getEvents(): SportEvent[] {
    return events
}

// Returns events for a specific date (format: 2024-01-01)
export function getEventsByDate(date: string): SportEvent[] {
    return events.filter(event => event.dateVenue === date)
}

// Add new event to memory list - only runtime
export function addEvent(event: SportEvent): void {
    events.push(event)
}

