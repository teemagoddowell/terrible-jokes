<h1 align="center">😂 Terrible Jokes</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/EJS-303030?style=for-the-badge&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge"/>
</p>

<p align="center"><i>A minimal web app for getting random programming jokes with a simple refresh.</i></p>

---

<h2>📸 Preview</h2>

<p align="center">
  <img src="https://i.ibb.co/HLj6mMxY/Screenshot-2025-06-11-at-12-55-14.png" alt="App Preview" width="600"/>
</p>

---

<h2>🚀 Features</h2>

<ul>
  <li>🎲 Fetches random programming jokes from <a href="https://jokeapi.dev" target="_blank">JokeAPI</a></li>
  <li>😅 Supports both <b>single-line</b> and <b>two-part</b> jokes</li>
  <li>🖥️ Full-screen joke display with modern styling</li>
  <li>🎨 Responsive and animated UI</li>
</ul>

---

<h2>🧰 Tech Stack</h2>

<ul>
  <li><b>Backend:</b> Node.js, Express.js</li>
  <li><b>Templating:</b> EJS</li>
  <li><b>API:</b> JokeAPI</li>
  <li><b>HTTP Client:</b> Axios</li>
  <li><b>Frontend:</b> HTML5, CSS3, Google Fonts</li>
</ul>

---

<h2>📁 Project Structure</h2>

```
terrible-jokes/
├── public/
│   └── styles/
│       └── main.css
├── views/
│   └── index.ejs
├── index.js
├── package.json
└── README.md
```

---

<h2>📦 Installation</h2>

<pre>
git clone https://github.com/yourusername/terrible-jokes.git
cd terrible-jokes
npm install
npm start
</pre>

Then go to 👉 <b><a href="http://localhost:3000">http://localhost:3000</a></b>

---

<h2>🧪 How It Works</h2>

<ol>
  <li>The app makes a GET request to JokeAPI on page load</li>
  <li>If the joke is a one-liner, it's shown directly</li>
  <li>If it's a two-part joke, it's concatenated and shown</li>
  <li>Everything is rendered using EJS templating</li>
</ol>

---

<h2>🛠️ Customize</h2>

Want more joke categories? Modify the API URL in <code>index.js</code>:

```js
const jokesURL = "https://v2.jokeapi.dev/joke/Programming,Dark,Pun";
```

---

<h2>🤝 Contributing</h2>

Pull requests are welcome! If you have improvements, fixes, or features, feel free to fork and submit a PR.

---

<h2>📄 License</h2>

Licensed under the <a href="LICENSE">MIT License</a>.
