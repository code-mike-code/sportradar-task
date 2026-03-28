import data from '../data/data.json'
import type { SportEvent } from '../types/events'

const STORAGE_KEY = 'sports-calendar-events'

function loadFromStorage(): SportEvent[] {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return []
  try {
    return JSON.parse(stored) as SportEvent[]
  } catch {
    return []
  }
}

function saveToStorage(events: SportEvent[]): void {
  const customEvents = events.slice((data.data as SportEvent[]).length)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customEvents))
}

let events: SportEvent[] = [
  ...(data.data as SportEvent[]),
  ...loadFromStorage()
]

export function getEvents(): SportEvent[] {
  return events
}

export function getEventsByDate(date: string): SportEvent[] {
  return events.filter(event => event.dateVenue === date)
}

export function addEvent(event: SportEvent): void {
  events.push(event)
  saveToStorage(events)
}
