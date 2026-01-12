/* ================= PROJECT / APP DATA ================= */

const apps = {
  "Ved-AI": {
    title: "Ved AI",
    tagline: "AI assistant for coding, learning and automation.",
    description:
      "Ved AI is designed to help developers and learners with AI-powered chat, coding help and smart automation tools.",
    version: "v0.9 Beta",
    category: "AI / Productivity",
    status: "Beta",
    screenshots: [
      "assets/img/ai-1.png",
      "assets/img/ai-2.png",
      "assets/img/ai-3.png",
      "assets/img/ai-4.png",
    ],
    features: ["AI Chat", "Code Help", "Fast Performance"],
    download: "#"
  },

  "utility": {
    title: "Offline Utility App",
    tagline: "Utility app that works with low internet.",
    description:
      "Offline Utility App is a lightweight and fast application that allows users to access essential tools even without an internet connection.",
    version: "v1.0.0",
    category: "Utility",
    status: "Active",
    screenshots: [
      "assets/img/utility-1.png",
      "assets/img/utility-2.png",
      "assets/img/utility-3.png"
    ],
    features: ["Offline Mode", "Lightweight", "Fast"],
    download: "#"
  }
};


/* ================= PROJECT PAGE LOGIC ================= */

const params = new URLSearchParams(window.location.search);
const appKey = params.get("app");

if (appKey && apps[appKey]) {
  const app = apps[appKey];

  // BASIC INFO
  setText("title", app.title);
  setText("tagline", app.tagline);
  setText("description", app.description);
  setText("version", app.version);
  setText("category", app.category);
  setText("status", app.status);

  // DOWNLOAD
  const downloadBtn = document.getElementById("download");
  if (downloadBtn) downloadBtn.href = app.download;

  // SCREENSHOTS 
  const shotsContainer = document.querySelector(".screenshots");
  if (shotsContainer) {
    shotsContainer.innerHTML = "";

    app.screenshots.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = app.title + " screenshot";
      img.onclick = () => openPreview(src);
      shotsContainer.appendChild(img);
    });
  }

  // FEATURES
  const featureList = document.getElementById("features");
  if (featureList) {
    featureList.innerHTML = "";
    app.features.forEach(feature => {
      const li = document.createElement("li");
      li.textContent = feature;
      featureList.appendChild(li);
    });
  }
}


/* ================= HELPER ================= */

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerText = value;
}


/* ================= IMAGE PREVIEW ================= */

function openPreview(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  if (!modal || !modalImg) return;

  modal.style.display = "flex";
  modalImg.src = src;
}

function closePreview() {
  const modal = document.getElementById("imgModal");
  if (modal) modal.style.display = "none";
}


/* ================= CONTACT FORM ================= */

function sendMail() {
  const n = document.getElementById("name")?.value.trim();
  const e = document.getElementById("email")?.value.trim();
  const m = document.getElementById("message")?.value.trim();

  if (!n || !e || !m) {
    alert("Please fill all fields");
    return;
  }

  const subject = encodeURIComponent(`New Client - ${n}`);
  const body = encodeURIComponent(
    `Name: ${n}\nEmail: ${e}\n\nMessage:\n${m}`
  );

  window.location.href =
    `mailto:vedantb150@gmail.com?subject=${subject}&body=${body}`;
}
