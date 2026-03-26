# 🎥 WebRTC Video Call (Advanced)

This is a structured and scalable WebRTC video calling application built using React, Node.js, and Socket.IO.

---

## 🚀 Features

- 🎥 Video + Audio streaming
- 🔗 Peer-to-peer connection
- ⚛️ Custom React Hook (`useWebRTC`)
- 🧩 Modular architecture
- ⚡ Real-time signaling with Socket.IO

---

## 🧠 Concepts Covered

- Advanced WebRTC flow
- MediaStream & Tracks
- ICE Candidate handling
- Custom hooks in React
- Separation of concerns
- Scalable architecture

---

## 📁 Project Structure

```bash
webrtc-video/
│
├── server/
│   ├── index.js
│   └── socket.js
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── VideoCall.jsx
│   │   ├── hooks/
│   │   │   └── useWebRTC.js
│   │   ├── App.jsx
│   │   └── main.jsx
```

---

## 🛠 Tech Stack

- React (Vite)
- Node.js
- Express
- Socket.IO
- WebRTC APIs

---

## ⚙️ Setup Instructions

### 1️⃣ Start Server

```bash
cd server
npm install
npm start
```

### 2️⃣ Start Client

```bash
cd client
npm install
npm run dev
```

### 3️⃣ Run the App

- Open **2 tabs**
- Enter:
  - Tab 1 → `user1` → call `user2`
  - Tab 2 → `user2` → call `user1`
- Click **Start Call**

---

## 🔄 How It Works

1. Users join via Socket.IO
2. Caller creates offer
3. Receiver responds with answer
4. ICE candidates exchanged
5. Direct P2P connection established
6. Video + audio streams flow

---

## 🧩 Key Architecture

### 🔹 `useWebRTC` Hook
- Handles all WebRTC logic
- Keeps UI clean
- Reusable

### 🔹 `VideoCall` Component
- Handles UI rendering
- Displays local & remote video

---

## ⚠️ Limitations

- No TURN server (may fail in restricted networks)
- No call controls (mute/video toggle)
- No authentication system

---

## 🔮 Future Improvements

- [ ] 📞 Incoming call UI
- [ ] 🎤 Mute / Camera toggle
- [ ] 🖥 Screen sharing
- [ ] 👥 Multi-user (SFU)
- [ ] 🌐 Deployment with TURN server

---

## 🎯 Learning Outcome

After this project, you should understand:

- Full WebRTC lifecycle
- Real-time communication architecture
- React + WebRTC integration

---

## ⭐ Bonus

This project is a strong addition to your portfolio for frontend / full-stack roles.