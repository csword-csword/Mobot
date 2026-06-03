// Mobot platform kit — Test Runs list view
const RUNS = [
  ['Checkout → Apple Pay', 'Payments · 14 actions', 'iPhone 15 Pro · iOS 17.4', 'pass', '2m ago', 0],
  ['Deep link → Profile activation', 'Marketing · 9 actions', 'Pixel 8 · Android 14', 'fail', '14m ago', 2],
  ['Push notification → Live Activity', 'Engagement · 11 actions', 'iPhone 14 · iOS 17.2', 'pass', '38m ago', 0],
  ['SMS login + biometric unlock', 'Auth · 16 actions', 'Galaxy S23 · Android 14', 'flaky', '1h ago', 1],
  ['Apple Watch pairing handoff', 'Peripheral · 22 actions', 'iPhone 15 + Watch S9', 'pass', '2h ago', 0],
  ['In-app purchase → subscription', 'Payments · 12 actions', 'iPad Pro · iPadOS 17', 'running', 'now', 0],
  ['Onboarding carousel + perms', 'Activation · 18 actions', 'Pixel 7a · Android 13', 'pass', '3h ago', 0],
];
const BADGE = {
  pass: ['b-pass', 'check', 'Passed'], fail: ['b-fail', 'x', 'Failed'],
  flaky: ['b-flaky', 'alert-triangle', 'Flaky'], running: ['b-run', 'loader', 'Running'],
};
function StatusBadge({ s }) {
  const b = BADGE[s];
  return <span className={'badge ' + b[0]}><Icon name={b[1]} />{b[2]}</span>;
}

function RunsView({ onOpen }) {
  const [filter, setFilter] = useState('All');
  useLucide();
  const filters = ['All', 'Passed', 'Failed', 'Flaky', 'Running'];
  const shown = RUNS.filter(r => filter === 'All' || BADGE[r[3]][2] === filter);
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1>Test Runs</h1>
          <div className="sub">Robot-executed runs across your 300+ device fleet, verified by your CSM.</div>
        </div>
        <button className="btn btn-primary" style={{ marginLeft: 'auto' }}><Icon name="plus" />New test plan</button>
        <button className="btn btn-ghost"><Icon name="upload" />Upload video</button>
      </div>

      <div className="tiles">
        <div className="tile"><div className="lab"><Icon name="circle-check" />Pass rate</div><div className="val" style={{ color: 'var(--pass)' }}>98.6%</div><div className="delta up">▲ 2.1% vs last week</div></div>
        <div className="tile"><div className="lab"><Icon name="play" />Runs this week</div><div className="val">1,284</div><div className="delta up">▲ 312 robot-hours saved</div></div>
        <div className="tile"><div className="lab"><Icon name="bug" />Open bugs</div><div className="val" style={{ color: 'var(--fail)' }}>7</div><div className="delta down">▲ 3 new today</div></div>
        <div className="tile"><div className="lab"><Icon name="smartphone" />Devices covered</div><div className="val">142</div><div className="delta up">iOS + Android</div></div>
      </div>

      <div className="filters">
        {filters.map(f => <span key={f} className={'fpill' + (f === filter ? ' on' : '')} onClick={() => setFilter(f)}>{f}</span>)}
        <span className="fpill" style={{ marginLeft: 'auto' }}><Icon name="sliders-horizontal" style={{ width: 14, height: 14, verticalAlign: '-2px', marginRight: 5 }} />Filters</span>
      </div>

      <div className="table">
        <div className="trow head"><span></span><span>Test</span><span>Device</span><span>Status</span><span>Updated</span><span></span></div>
        {shown.map((r, i) => (
          <div className="trow" key={i} onClick={() => onOpen(r)}>
            <span><input type="checkbox" onClick={e => e.stopPropagation()} /></span>
            <span><div className="tname">{r[0]}</div><div className="tmeta">{r[1]}</div></span>
            <span className="tdev">{r[2]}</span>
            <span><StatusBadge s={r[3]} /></span>
            <span className="cell-sm">{r[4]}</span>
            <span className="chev"><Icon name="chevron-right" /></span>
          </div>
        ))}
      </div>
    </div>
  );
}
Object.assign(window, { RunsView, RUNS, BADGE, StatusBadge });
