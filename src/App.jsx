import Header from "./components/Header/Header";
import TrackingProgress from "./components/TrackingProgress/TrackingProgress";
import TrackingTimeline from "./components/TrackingTimeline/TrackingTimeline";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mt-20">
          {/* Tracking Progress Component */}
          <TrackingProgress />

          {/* Tracking Timeline Component */}
          <div className="mt-1">
            <TrackingTimeline />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
