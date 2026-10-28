# AI Failure Audit — Exercise 3

## Failure 1: Missing Default Export

### Prompt
Help me integrate the PUBG Match Telemetry component into the React application.

### AI Code
The App component was implemented, but the default export was missing.

### Bug
The application could not correctly import the App component, resulting in a blank screen.

### DevTools Proof
The application displayed a blank page. The issue was investigated by checking the browser Console and the App component import/export.

### Engineering Fix
Added `export default App;` at the end of `src/App.jsx` and verified that the application rendered correctly.

---

## Failure 2: Incomplete Request Cancellation

### Prompt
Implement PUBG telemetry with AbortController when switching squads.

### AI Code
The initial implementation created an AbortController and used setTimeout to simulate a request.

### Bug
The implementation simulated cancellation with a timer. It did not perform a real network request, so it could not demonstrate cancellation of an actual HTTP request.

### DevTools Proof
The implementation was inspected in `src/components/PubgMatchTelemetry.jsx`. The telemetry operation used setTimeout rather than fetch.

### Engineering Fix
Added an AbortController signal check and cleanup to cancel the simulated operation when the squad changes or the component unmounts. The implementation remains a simulated request and should not be considered a real network request.

---

## Failure 3: Missing Skeleton Loading UI

### Prompt
Implement the PUBG telemetry loading state.

### AI Code
The initial loading state displayed only a text message:

`Connecting to satellite...`

### Bug
The loading state did not provide the skeleton UI required by the assignment.

### DevTools Proof
The initial loading component was inspected in `src/components/PubgMatchTelemetry.jsx`. It contained a heading and loading text without skeleton elements.

### Engineering Fix
Added skeleton elements and CSS animation in `src/components/PubgMatchTelemetry.jsx` and `src/App.css`. Verified the production build using `npm run build`.

---

## Verification

- [x] Four-state telemetry structure
- [x] Simulated 35% packet loss
- [x] Retry button
- [x] Skeleton loading UI
- [x] Production build completed successfully
- [ ] Verify real network request cancellation
- [ ] Capture final browser and DevTools evidence