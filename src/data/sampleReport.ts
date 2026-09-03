/**
 * A sanitized sample defect report, modeled on the structure of a real Mobot
 * platform report: header, run metadata, 90-day analytics, observations, and
 * grouped test steps with per-step evidence. All identifiers are fictional.
 */
export type StepStatus = 'passed' | 'failed' | 'skipped';

export interface Step {
  n: number;
  text: string;
  status: StepStatus;
  /** Which wireframe thumbnail to render. */
  screen: 'home' | 'form' | 'map' | 'sheet' | 'photos' | 'camera' | 'summary' | 'tasks' | 'crash';
  note?: string;
}

export interface StepGroup {
  title: string;
  steps: Step[];
}

export const sampleReport = {
  status: 'FAILED' as const,
  title: 'Acme Pro – Measurements and Inspection – Add Task If One Group Exists for Structure and Duplicate Tasks',
  date: '9/2/26, 4:39 PM',
  customer: 'Acme Home Services',
  appVersion: '5.36.0 (173)',
  actions: 104,
  device: 'Apple iPhone 13',
  os: 'iOS 27.0 Developer Beta',
  analytics: [
    { label: 'Test plan runs', value: '1' },
    { label: 'Total issues found', value: '1' },
    { label: 'Unique P0', value: '1', tone: 'p0' as const },
    { label: 'Unique P1', value: '0', tone: 'p1' as const },
    { label: 'Unique P2', value: '0', tone: 'p1' as const },
    { label: 'Unique P3', value: '0' },
  ],
  observations: [
    {
      priority: 'P0',
      text: '[iOS] [Pro] After tapping on the "Add another Facet" option, the app crashed.',
      occurrences: 1,
      analystNote:
        'Reproduced 3 of 3 attempts on iPhone 13 / iOS 27.0 beta after a project already contains one structure group. Not reproducible on iOS 18.6. Device log attached; crash occurs in the task-group merge on the main thread.',
      stepRef: 33,
    },
  ],
  totalSteps: 41,
  groups: [
    {
      title: 'Create a project',
      steps: [
        { n: 1, text: 'Tap the plus icon in the bottom navigation bar to open the "Start something new" menu.', status: 'passed', screen: 'home' },
        { n: 2, text: "Tap 'Exterior measurements' to navigate to the Property details screen.", status: 'passed', screen: 'form' },
        { n: 3, text: 'Tap the Property name field to activate it.', status: 'passed', screen: 'form' },
        { n: 4, text: 'Enter "Duplicate Tasks" in the Property name field.', status: 'passed', screen: 'form' },
        { n: 5, text: 'Tap the Address field to look up an address.', status: 'passed', screen: 'sheet' },
        { n: 6, text: 'Tap "Use current location" to show the address on the map.', status: 'passed', screen: 'map' },
        { n: 7, text: 'Tap the "Save address" button to return to the Property details screen.', status: 'passed', screen: 'form' },
        { n: 8, text: 'Tap the "Bill to" field to view billing options.', status: 'passed', screen: 'sheet' },
        { n: 9, text: 'Tap "Acme Inspections" to select it as the billing account.', status: 'passed', screen: 'form' },
        { n: 10, text: 'Tap the Deliverable drop-down menu and select "Full exterior".', status: 'passed', screen: 'sheet' },
      ],
    },
    {
      title: 'Capture property photos',
      steps: [
        { n: 12, text: 'Tap Back to launch the camera.', status: 'passed', screen: 'photos' },
        { n: 13, text: 'Tap the shutter button to capture a photo of the back.', status: 'passed', screen: 'camera' },
        { n: 14, text: 'Tap Right side to launch the camera.', status: 'passed', screen: 'photos' },
        { n: 15, text: 'Tap the shutter button to capture a photo of the right side.', status: 'passed', screen: 'camera' },
        { n: 20, text: 'Tap Continue to navigate to the Capture summary.', status: 'passed', screen: 'summary' },
      ],
    },
    {
      title: 'Add tasks to the structure group',
      steps: [
        { n: 30, text: 'Tap "Continue to inspection" to open the Tasks screen.', status: 'passed', screen: 'tasks' },
        { n: 31, text: 'Tap "Add task" and select the existing structure group.', status: 'passed', screen: 'tasks' },
        { n: 32, text: 'Enter "Roof – south facet" as the task name and tap Save.', status: 'passed', screen: 'tasks' },
        {
          n: 33,
          text: 'Tap "Add another Facet" to add a second task to the same group.',
          status: 'failed',
          screen: 'crash',
          note: 'App terminated and returned to the iOS home screen. See observation P0.',
        },
        { n: 34, text: 'Verify both tasks appear under the structure group.', status: 'skipped', screen: 'tasks' },
      ],
    },
  ] as StepGroup[],
};
