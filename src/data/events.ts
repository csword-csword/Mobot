export interface MobotEvent {
  slug: string;
  name: string;
  organizer: string;
  /** Display date — confirm against the organizer's page. */
  dateLabel: string;
  /** ISO date used to hide the event once it has passed (set when confirmed). */
  endsOn?: string;
  city: string;
  venue?: string;
  role: string;
  booth?: string;
  url: string;
  blurb: string;
}

export const events: MobotEvent[] = [
  {
    slug: 'software-quality-summit-boston-2026',
    name: 'Software Quality Summit Boston',
    organizer: 'TestingMind',
    dateLabel: 'October 2026',
    city: 'Boston, MA',
    role: 'Sponsor',
    url: 'https://www.testingmind.com/event/software-quality-summit-boston/',
    blurb:
      'Mobot is sponsoring the Software Quality Summit in Boston. Stop by to see a robot physically test a real device, walk through a verified defect report on your own app, and talk with the team about real-device coverage for push, Bluetooth, biometrics, and camera flows.',
  },
];

export function upcomingEvents(now = new Date()) {
  return events.filter((e) => !e.endsOn || new Date(e.endsOn + 'T23:59:59') >= now);
}
