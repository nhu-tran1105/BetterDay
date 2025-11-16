# 🌸 BetterDay Calendar – Interface Improvement Project

Welcome to **BetterDay Calendar**, a redesigned date & time selection app created for the **CIS 376 – Web Development** course.  
This project demonstrates how a simple redesign can make calendar interactions faster, clearer, and more enjoyable — especially for mobile users.

---

## 👩‍💻 Project Overview

**Project Title:** *BetterDay Calendar – Fixing the iOS Calendar UX*  
**Purpose:**  
To improve the user experience of event creation by reducing excessive scrolling and taps found in the iOS Calendar.  
The prototype uses a simple visual grid for day selection and a clear 24-hour time picker — requiring only *two clicks* to set up an event.

---

## 💖 Acknowledgment

Course: CIS 376 – Web Development

Instructor: Dr. Barry Cumbie

Student Developer: Nhu Tran

Image Credit: Apple iOS Calendar (used for educational comparison only)

---

## 📅 Before vs After

| Before: iOS Calendar | After: BetterDay Prototype |
|----------------------|----------------------------|
| 🌀 Requires multiple scrolls and taps to select time | 💡 Single-click day and time selection |
| 🧱 Dense, cluttered visual layout | 💕 Minimal, color-coded grid layout |
| 🕓 No quick note or event label option | 📝 Add custom notes for each event instantly |
| 📱 Harder to use on small screens | 🌷 Optimized for mobile and touch interaction |

---

## 🧠 User Story

> **As a** busy user who schedules daily plans,  
> **I want** a calendar interface that lets me pick a day, time, and note quickly,  
> **so that** I can organize events without endless scrolling.

---

## 🚀 Live Demo & Source

**Live Site:** [BetterDay Calendar – GitHub Pages](https://nhu-tran1105.github.io/BetterDay/)  
**Source Code:** [GitHub Repository](https://github.com/nhu-tran1105/BetterDay)

---

## ✅ Key Features

- 📆 **Clickable day grid** – pick a date visually  
- ⏰ **Selectable time buttons** – choose from 8 preset times  
- 📝 **Note input field** – write and save an event message  
- 💬 **Instant feedback** – confirmation appears in the result box  
- 💖 **Stylish pastel theme** – feminine, soft colors, friendly layout  
- 🖥 **Console log** for each saved event with date, time, and note  

---

## 🧱 Architecture Overview

The project is built with **HTML, CSS, and Vanilla JavaScript (ES6)** using a clean modular structure.

### 📂 File Structure

│
├── index.html # Main UI structure
├── styles.css # Custom pastel theme and responsive design
├── scripts.js # Handles logic for selection, note saving, and console logging
└── /images # Before and After UI screenshots


---

## 💻 Code Snippet – Event Logging

```javascript
saveNoteBtn.addEventListener("click", () => {
  userNote = noteInput.value.trim();

  if (!selectedDate || !selectedTime) {
    resultBox.classList.replace("alert-info", "alert-danger");
    resultBox.textContent = "❗ Please select both date and time before saving.";
    return;
  }

  resultBox.classList.replace("alert-warning", "alert-success");
  resultBox.innerHTML = `
    ✅ Event saved: <strong>${selectedDate}</strong> @ <strong>${selectedTime}</strong><br>
    📝 Note: ${userNote || "None"}
  `;

  console.log(
    `%c📅 Event: ${selectedDate} @ ${selectedTime} | 📝 Note: ${userNote}`,
    "color: #f48fb1; font-weight: bold;"
  );
});
```
### 🪄 Explanation

This snippet ensures that users can only save an event after both the date and time are selected.
It then logs the complete information — including note — to the browser console, and updates the confirmation box visually.

```javascript
function renderCalendar() {
  for (let i = 1; i <= 30; i++) {
    const btn = document.createElement("button");
    btn.className = "slot";
    btn.textContent = i;

    btn.addEventListener("click", () => {
      selectedDate = `${i} ${currentMonth.textContent}`;
      selectedTime = null;
      noteInput.value = "";

      document.querySelectorAll(".calendar-grid .slot").forEach(b =>
        b.classList.remove("selected")
      );
      btn.classList.add("selected");

      resultBox.classList.replace("alert-success", "alert-info");
      resultBox.innerHTML = `📅 Selected <strong>${selectedDate}</strong><br>Now choose a time.`;
    });

    calendarGrid.appendChild(btn);
  }
}
```
### 🪄 Explanation

Generates 30 interactive date buttons.
When clicked, the previous time selection is reset to prevent carry-over errors and the interface updates to guide the user to pick a time next.

---

## 🌷 How It Could Be Better

While this prototype is functional and efficient, there are several directions to enhance it further:

- 🔁 Add recurring event options (daily/weekly reminders)

- 💾 Save notes using localStorage for persistence after reload

- 🖼 Allow emoji or color tags for event personalization

- 🌙 Add dark/light mode toggle for late-night users

- 📲 Include drag-to-select date ranges for multiple-day events

---

## 🧰 Tech Stack

|Component | Description|
|--------- | -----------|
|**Languages**	  | HTML5, CSS3, JavaScript ES6|
|**Framework**	  | Bootstrap 5|

---

## 🤝 Attribution

Bootstrap Docs:	Button & grid utility classes.

---