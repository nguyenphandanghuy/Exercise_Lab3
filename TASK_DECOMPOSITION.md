# Lab 3 – Task Decomposition

## Project Overview
**Project:** Exercise Lab 3  
**Technology:** React, JavaScript, Vite, CSS  
**Repository:** https://github.com/nguyenphandanghuy/Exercise_Lab3

The project is divided into three exercises. Each exercise is developed and tested independently before integration.

---

## Exercise 1 – Developer Profile

### Task 1.1: Project Setup
- Initialize the React project using Vite.
- Configure the project structure.
- Prepare the main application entry point.

### Task 1.2: Developer Profile Interface
- Create the Developer Profile component.
- Display developer information.
- Organize the profile layout using CSS.
- Use an HTTPS avatar image.

### Task 1.3: Integration and Testing
- Integrate the Developer Profile into the application.
- Verify the profile information and layout.
- Check the interface in the browser.

---

## Exercise 2 – Scientist Directory

### Task 2.1: Data Structure
- Create the scientist data structure.
- Normalize the data schema.
- Use stable IDs for scientist records.

### Task 2.2: Scientist Directory
- Display scientist information.
- Implement directory interactions.
- Support deleting and resetting records.
- Update the interface when the data changes.

### Task 2.3: Integration and Testing
- Integrate the Scientist Directory into the application.
- Verify data updates and interactions.
- Test the directory interface.

---

## Exercise 3 – PUBG Match Telemetry

### Task 3.1: Squad Data
- Create the PUBG squad dataset.
- Define squad IDs and match information.
- Include squad status, alive players, kills, and win probability.

### Task 3.2: Telemetry State Management
- Implement IDLE, LOADING, SUCCESS, and ERROR states.
- Simulate telemetry requests.
- Handle simulated packet loss.
- Use AbortController to cancel outdated requests.
- Prevent cancelled requests from updating the interface.

### Task 3.3: Loading and Error Interface
- Implement skeleton loading UI.
- Display inline error messages.
- Add the Reconnect Satellite (Retry) action.
- Avoid using window.alert().

### Task 3.4: Polling and Controls
- Implement periodic telemetry polling.
- Add Pause and Resume controls.
- Clean up polling intervals and pending requests.
- Handle squad selection changes.

### Task 3.5: Testing
- Verify telemetry state transitions.
- Test squad selection.
- Test retry behavior.
- Test polling and Pause/Resume.
- Verify cancellation and cleanup behavior.

---

## Development Workflow

1. Break each exercise into small implementation tasks.
2. Implement one task at a time.
3. Test the result in the browser.
4. Review the code and fix issues.
5. Commit completed tasks using descriptive commit messages.
6. Push completed commits to GitHub.
7. Verify the repository is synchronized.

---

## Git and Version Control

The project uses Git for version control.

Completed implementation tasks are saved using atomic commits with descriptive messages.

The main branch is synchronized with the GitHub repository:

https://github.com/nguyenphandanghuy/Exercise_Lab3

---

## Documentation

- README.md: Project overview and setup instructions.
- AI_FAILURE_AUDIT.md: Documentation of AI-generated code failures, debugging evidence, and engineering fixes.
- TASK_DECOMPOSITION.md: Project task breakdown and development workflow.

---

## Final Verification

Before submission:

- Verify all three exercises.
- Test the main interactions.
- Review error handling and cleanup.
- Check project documentation.
- Verify Git history.
- Confirm the latest changes are pushed to GitHub.
