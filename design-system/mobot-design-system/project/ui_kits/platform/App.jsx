// Mobot platform kit — app shell wiring
function App() {
  const [view, setView] = useState('runs');   // 'runs' | 'report'
  const [run, setRun] = useState(null);
  useLucide();
  const crumb = view === 'report'
    ? <React.Fragment><span onClick={() => setView('runs')} style={{ cursor: 'pointer' }}>Test Runs</span><Icon name="chevron-right" style={{ width: 15, height: 15 }} /><b>{(run || RUNS[0])[0]}</b></React.Fragment>
    : <b>Test Runs</b>;
  return (
    <div className="app">
      <Sidebar view={view} />
      <div className="main">
        <Topbar crumb={crumb} />
        {view === 'runs'
          ? <RunsView onOpen={r => { setRun(r); setView('report'); }} />
          : <ReportView run={run} onBack={() => setView('runs')} />}
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
