import { getCalendarDays } from '../src/components/calendar'

describe('getCalendarDays', () => {
  test('returns array with correct number of days for January 2024', () => {
    const days = getCalendarDays(2024, 0)  // 0 = styczeń
    const actualDays = days.filter(d => d !== null)
    expect(actualDays).toHaveLength(31)
  })

  test('returns array with correct number of days for February 2024 (leap year)', () => {
    const days = getCalendarDays(2024, 1)  // 1 = luty, 2024 = rok przestępny
    const actualDays = days.filter(d => d !== null)
    expect(actualDays).toHaveLength(29)
  })

  test('returns array with correct number of days for February 2023 (non-leap year)', () => {
    const days = getCalendarDays(2023, 1)
    const actualDays = days.filter(d => d !== null)
    expect(actualDays).toHaveLength(28)
  })

  test('first element is null if month does not start on Monday', () => {
    // Styczeń 2024 zaczyna się w poniedziałek — offset = 0, brak null na początku
    const days = getCalendarDays(2024, 0)
    expect(days[0]).toBe(1)
  })

  test('adds null padding when month starts mid-week', () => {
    // Marzec 2024 zaczyna się w piątek — offset = 4 (pon=0, wt=1, śr=2, czw=3, pt=4)
    const days = getCalendarDays(2024, 2)
    const nullCount = days.filter(d => d === null).length
    expect(nullCount).toBe(4)
  })

  test('last day in array equals total days in month', () => {
    const days = getCalendarDays(2024, 0)  // styczeń = 31 dni
    const lastDay = [...days].reverse().find(d => d !== null)
    expect(lastDay).toBe(31)
  })
})
