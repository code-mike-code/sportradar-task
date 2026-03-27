import { getEvents, getEventsByDate, addEvent } from '../src/services/eventService'
import type { SportEvent } from '../src/types/events'

const mockEvent: SportEvent = {
  season: 2025,
  status: 'scheduled',
  dateVenue: '2025-06-15',
  timeVenueUTC: '18:00:00',
  stadium: null,
  homeTeam: {
    name: 'Test FC',
    officialName: 'Test Football Club',
    slug: 'test-fc',
    abbreviation: 'TES',
    teamCountryCode: 'POL',
    stagePosition: null
  },
  awayTeam: {
    name: 'Demo SC',
    officialName: 'Demo Sports Club',
    slug: 'demo-sc',
    abbreviation: 'DEM',
    teamCountryCode: 'GER',
    stagePosition: null
  },
  result: null,
  stage: { id: 'FINAL', name: 'FINAL', ordering: 1 },
  group: null,
  originCompetitionId: 'test-league',
  originCompetitionName: 'Test League'
}

describe('eventService', () => {
  test('getEvents() returns an array', () => {
    const events = getEvents()
    expect(Array.isArray(events)).toBe(true)
  })

  test('getEvents() returns events from data.json', () => {
    const events = getEvents()
    expect(events.length).toBeGreaterThan(0)
  })

  test('getEventsByDate() returns events matching the date', () => {
    const events = getEventsByDate('2024-01-03')
    expect(events.length).toBeGreaterThan(0)
    events.forEach(e => expect(e.dateVenue).toBe('2024-01-03'))
  })

  test('getEventsByDate() returns empty array for date with no events', () => {
    const events = getEventsByDate('1999-01-01')
    expect(events).toHaveLength(0)
  })

  test('addEvent() adds a new event to the list', () => {
    const before = getEvents().length
    addEvent(mockEvent)
    const after = getEvents().length
    expect(after).toBe(before + 1)
  })

  test('addEvent() adds event with correct date', () => {
    const events = getEventsByDate('2025-06-15')
    expect(events.some(e => e.homeTeam?.name === 'Test FC')).toBe(true)
  })
})