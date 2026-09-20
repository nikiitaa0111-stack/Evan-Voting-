// ==========================================
// DAILY UPDATE CONFIGURATION
// Edit this section to add, remove, or update website content!
// ==========================================
const DATA = {
  // 1. ACTIVE VOTES
  votes: [
    {
      title: "M Countdown Pre-Voting",
      platform: "Mnet Plus App",
      description: "Vote for EVAN's new title track!",
      deadline: "2026-09-25T23:59:59", // Format: YYYY-MM-DDTHH:MM:SS
      link: "https://mnetplus.world"
    },
    {
      title: "Show Champion Daily Poll",
      platform: "Idol Champ App",
      description: "Collect Chamsim daily and drop votes for EVAN.",
      deadline: "2026-09-23T18:00:00",
      link: "https://idolchamp.com"
    },
    {
      title: "Global Popularity Award",
      platform: "Website Vote",
      description: "Unlimited daily votes available per account.",
      deadline: "2026-09-30T23:59:59",
      link: "https://example.com"
    }
  ],

  // 2. GUIDES
  guides: [
    {
      title: "How to Collect Heart Jellies",
      platform: "STAR PLANET",
      description: "Complete daily missions and watch short ads to gather hearts for EVAN's upcoming comeback."
    },
    {
      title: "Streaming Strategy Guide",
      platform: "Spotify & Apple Music",
      description: "Follow the approved playlist structure: EVAN Track - Filler Track - EVAN Track."
    }
  ],

  // 3. DAILY CHECKLIST
  routine: [
    "Collect daily login bonus on Idol Champ",
    "Watch 5 daily ads on Star Planet",
    "Stream EVAN's latest MV on YouTube",
    "Cast daily votes on Mnet Plus"
  ]
};

// ==========================================
// RENDER FUNCTIONS (Do not modify unless changing layout)
// ==========================================

function renderVotes() {
  const container = document.getElementById("voting-grid");
  container.innerHTML = "";

  DATA.votes.forEach((vote, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div>
        <div class="card-header">
          <h4 class="card-title">${vote.title}</h4>
          <span class="platform-tag">${vote.platform}</span>
        </div>
        <p class="card-description">${vote.description}</p>
      </div>
      <div>
        <div class="timer-box" id="timer-${index}">Calculating time...</div>
        <a href="${vote.link}" target="_blank" class="vote-btn">Vote Now ↗</a>
      </div>
    `;
    container.appendChild(card);
    startCountdown(`timer-${index}`, vote.deadline);
  });
}

function renderGuides() {
  const container = document.getElementById("guides-grid");
  container.innerHTML = "";

  DATA.guides.forEach(guide => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div>
        <div class="card-header">
          <h4 class="card-title">${guide.title}</h4>
          <span class="platform-tag">${guide.platform}</span>
        </div>
        <p class="card-description">${guide.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderRoutine() {
  const container = document.getElementById("routine-list");
  container.innerHTML = "";

  DATA.routine.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" id="task-${index}">
      <label for="task-${index}">${item}</label>
    `;
    container.appendChild(li);
  });
}

// Countdown Timer Logic
function startCountdown(elementId, deadlineStr) {
  const targetDate = new Date(deadlineStr).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById(elementId).innerText = "Voting Ended";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(elementId).innerText = 
      `Ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  update();
  setInterval(update, 1000);
}

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
  renderVotes();
  renderGuides();
  renderRoutine();
});
