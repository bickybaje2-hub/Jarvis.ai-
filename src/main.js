
import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="jarvis">
    <header>
      <div class="brand"><span class="status-dot"></span> JARVIS AI</div>
      <span class="online">SYSTEM ONLINE</span>
    </header>

    <section class="hero">
      <p class="eyebrow">YOUR PERSONAL AI ASSISTANT</p>
      <h1>Good day. I'm <span>JARVIS.</span></h1>
      <p class="subtitle">How can I help you today?</p>
      <div class="orb"><div class="orb-core"></div></div>
      <p class="listening" id="status">READY TO ASSIST</p>
    </section>

    <section class="chat" id="chat">
      <div class="message bot">Hello! I'm JARVIS. Ask me anything.</div>
    </section>

    <form id="chat-form">
      <input id="prompt" placeholder="Message JARVIS..." autocomplete="off">
      <button type="button" id="mic" aria-label="Speak">🎙</button>
      <button type="submit" class="send">➤</button>
    </form>

    <footer>Created by <strong>Aditya Jha</strong></footer>
  </main>
`;

const chat = document.querySelector('#chat');
const form = document.querySelector('#chat-form');
const input = document.querySelector('#prompt');
const status = document.querySelector('#status');

function addMessage(text, type) {
  const item = document.createElement('div');
  item.className = `message ${type}`;
  item.textContent = text;
  chat.appendChild(item);
  chat.scrollTop = chat.scrollHeight;
}

function reply(text) {
  const q = text.toLowerCase();
  if (q.includes('hello') || q.includes('hi')) return 'Hello! Great to hear from you. How can I help?';
  if (q.includes('your name')) return 'I am JARVIS, your personal AI assistant.';
  if (q.includes('who created') || q.includes('founder')) return 'I was created by Aditya Jha.';
  if (q.includes('time')) return `The time is ${new Date().toLocaleTimeString()}.`;
  if (q.includes('date')) return `Today is ${new Date().toLocaleDateString()}.`;
  return 'I received your message! This is the JARVIS demo. Connect an AI service through a secure backend to enable real AI answers.';
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  input.value = '';
  status.textContent = 'THINKING...';
  setTimeout(() => {
    const answer = reply(text);
    addMessage(answer, 'bot');
    status.textContent = 'READY TO ASSIST';
  }, 500);
});

document.querySelector('#mic').addEventListener('click', () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    status.textContent = 'VOICE INPUT NOT SUPPORTED';
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.onstart = () => status.textContent = 'LISTENING...';
  recognition.onresult = event => {
    input.value = event.results[0][0].transcript;
    form.requestSubmit();
  };
  recognition.onerror = () => status.textContent = 'VOICE ERROR - TRY AGAIN';
  recognition.onend = () => {
    if (status.textContent === 'LISTENING...') status.textContent = 'READY TO ASSIST';
  };
  recognition.start();
});
