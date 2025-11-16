let selectedDate = null;
let selectedTime = null;
let userNote = "";

const calendarGrid = document.getElementById("calendarGrid");
const timeGrid = document.getElementById("timeGrid");
const resultBox = document.getElementById("resultBox");
const noteInput = document.getElementById("noteInput");
const saveNoteBtn = document.getElementById("saveNoteBtn");
const currentMonth = document.getElementById("currentMonth");

// Display current month and year
function updateMonth() {
  const date = new Date();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  currentMonth.textContent = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

// Update display message (but DO NOT log yet)
function showSelectionStatus() {
  if (selectedDate && selectedTime) {
    resultBox.classList.replace("alert-info", "alert-warning");
    resultBox.innerHTML = `
      📅 Selected: <strong>${selectedDate}</strong> @ <strong>${selectedTime}</strong><br>
      ✏️ Write your note below and press <strong>Save Note</strong> to record this event.
    `;
  }
}

// Render calendar grid
function renderCalendar() {
  for (let i = 1; i <= 30; i++) {
    const btn = document.createElement("button");
    btn.className = "slot";
    btn.textContent = i;

    btn.addEventListener("click", () => {
      selectedDate = `${i} ${currentMonth.textContent}`;
      selectedTime = null; // reset old time
      userNote = ""; // reset note
      noteInput.value = "";

      // reset visuals
      document.querySelectorAll(".calendar-grid .slot").forEach(b => b.classList.remove("selected"));
      document.querySelectorAll(".time-grid .slot").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      resultBox.classList.replace("alert-success", "alert-info");
      resultBox.innerHTML = `📅 Selected <strong>${selectedDate}</strong><br>Now choose a time.`;
    });

    calendarGrid.appendChild(btn);
  }
}

// Render time buttons
function renderTimes() {
  const times = ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"];
  times.forEach(time => {
    const btn = document.createElement("button");
    btn.className = "slot";
    btn.textContent = time;

    btn.addEventListener("click", () => {
      if (!selectedDate) {
        resultBox.classList.replace("alert-info", "alert-warning");
        resultBox.textContent = "Please select a date first!";
        return;
      }

      selectedTime = time;

      document.querySelectorAll(".time-grid .slot").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      showSelectionStatus();
    });

    timeGrid.appendChild(btn);
  });
}

// Save note and log event
saveNoteBtn.addEventListener("click", () => {
  userNote = noteInput.value.trim();

  if (!selectedDate || !selectedTime) {
    resultBox.classList.replace("alert-warning", "alert-danger");
    resultBox.textContent = "❗ Please select both date and time before saving a note.";
    return;
  }

  if (!userNote) {
    resultBox.classList.replace("alert-warning", "alert-danger");
    resultBox.textContent = "✏️ Please write a note before saving.";
    return;
  }

  // Show confirmation
  resultBox.classList.replace("alert-warning", "alert-success");
  resultBox.innerHTML = `
    ✅ Event saved: <strong>${selectedDate}</strong> @ <strong>${selectedTime}</strong><br>
    📝 Note: ${userNote}
  `;

  // Log to console
  console.log(
    `%c📅 Event: ${selectedDate} @ ${selectedTime} | 📝 Note: ${userNote}`,
    "color: #f06292; font-weight: bold;"
  );

  // Optional: clear note field
  noteInput.value = "";
});

// Initialize app
updateMonth();
renderCalendar();
renderTimes();
