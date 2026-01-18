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
    download: "downloads/ved-ai-assistant-v1.2.0.apk"
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

  setText("title", app.title);
  setText("tagline", app.tagline);
  setText("description", app.description);
  setText("version", app.version);
  setText("category", app.category);
  setText("status", app.status);

  const downloadBtn = document.getElementById("download");
  if (downloadBtn) {
    downloadBtn.href = app.download;
    downloadBtn.setAttribute("download", "Ved-AI-Assistant.apk");
  }

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
  if (el) el.textContent = value;
}

/* ================= IMAGE PREVIEW ================= */

function openPreview(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  if (modal && modalImg) {
    modal.style.display = "flex";
    modalImg.src = src;
  }
}

function closePreview() {
  const modal = document.getElementById("imgModal");
  if (modal) modal.style.display = "none";
}

/* ================= CONTACT FORM ================= */

const sendBtn = document.getElementById("sendBtn");
if (sendBtn) {
  sendBtn.addEventListener("click", function() {
    console.log("Send button clicked!");  // Debug: check if button click detect ho raha

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields: Name, Email and Message");
      console.log("Validation failed");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address");
      console.log("Invalid email");
      return;
    }

    const subject = encodeURIComponent(`New Contact from ${name} - Galaxy Tech`);
    const body = encodeURIComponent(
      `Hello Vedant,\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}\n\n` +
      `Best regards,\n${name}`
    );

    const mailtoLink = `mailto:vedantb150@gmail.com?subject=${subject}&body=${body}`;

    console.log("Mailto link generated:", mailtoLink);  // Debug: link check karne ke liye

    // Email client kholne ka try
    window.location.href = mailtoLink;

    // Success alert (thoda delay se)
    setTimeout(() => {
      alert("Thank you! Your message is ready in your email app. Just press Send.");
    }, 300);

    // Form clear
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
} else {
  console.error("Send button not found! Check id='sendBtn'");
}