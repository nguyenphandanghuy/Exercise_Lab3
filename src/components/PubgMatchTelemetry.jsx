
import { useEffect, useState } from "react";
import { PUBG_VN_SQUADS } from "../data/pubgSquads";

export function PubgMatchTelemetry({ squadId }) {
  const [view, setView] = useState({
    status: "IDLE",
    data: null,
    error: null,
  });

  const [retryTick, setRetryTick] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let isActive = true;
    let requestController = null;
    let timer = null;
    let firstRequest = true;

    const loadTelemetry = () => {
      requestController = new AbortController();
      const signal = requestController.signal;

      if (firstRequest) {
        setView({
          status: "LOADING",
          data: null,
          error: null,
        });

        firstRequest = false;
      }

      timer = setTimeout(() => {
        if (!isActive || signal.aborted) return;

        // Simulate 35% packet loss.
        const packetLost = Math.random() < 0.35;

        if (packetLost) {
          setView({
            status: "ERROR",
            data: null,
            error: "Satellite connection lost. Please reconnect.",
          });
          return;
        }

        const squad = PUBG_VN_SQUADS.find(
          (item) => item.id === squadId
        );

        if (!squad) {
          setView({
            status: "ERROR",
            data: null,
            error: "Squad not found.",
          });
          return;
        }

        if (!isActive || signal.aborted) return;

        setView({
          status: "SUCCESS",
          data: squad,
          error: null,
        });
      }, 800);
    };

    loadTelemetry();

    const interval = setInterval(() => {
      if (!isActive) return;

      if (requestController) {
        requestController.abort();
      }

      clearTimeout(timer);

      loadTelemetry();
    }, 2000);

    return () => {
      isActive = false;

      clearInterval(interval);
      clearTimeout(timer);

      if (requestController) {
        requestController.abort();
      }
    };
  }, [squadId, retryTick, isPaused]);

  // LOADING: Skeleton UI
  if (view.status === "LOADING") {
    return (
      <section
        aria-busy="true"
        aria-label="Loading PUBG telemetry"
      >
        <h2>KRAFTON PUBG Vietnam Telemetry</h2>

        <div className="telemetry-skeleton">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>

        <p>Connecting to satellite...</p>
      </section>
    );
  }

  // ERROR
  if (view.status === "ERROR") {
    return (
      <section>
        <h2>Satellite Connection Error</h2>

        <p role="alert">{view.error}</p>

        <button
          type="button"
          onClick={() => setRetryTick((tick) => tick + 1)}
        >
          Reconnect Satellite (Retry)
        </button>
      </section>
    );
  }

  // IDLE
  if (view.status === "IDLE") {
    return (
      <section>
        <h2>KRAFTON PUBG Vietnam Telemetry</h2>
        <p>Waiting for telemetry...</p>
      </section>
    );
  }

  // SUCCESS
  return (
    <article aria-live="polite">
      <h2>{view.data.name}</h2>

      <p>Map: {view.data.map}</p>
      <p>Phase: {view.data.phase}</p>
      <p>Alive: {view.data.alive}</p>
      <p>Kills: {view.data.kills}</p>
      <p>Win Probability: {view.data.winProb}</p>
      <p>Status: {view.data.status}</p>

      <button
        type="button"
        onClick={() => setIsPaused((paused) => !paused)}
      >
        {isPaused ? "Resume Telemetry" : "Pause Telemetry"}
      </button>
    </article>
  );
}

export default PubgMatchTelemetry;
