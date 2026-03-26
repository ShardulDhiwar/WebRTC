# 🔊 WebRTC Audio Call (Basic)

This is a simple WebRTC audio calling application built to understand the core concepts of real-time communication.

---

## 🎯 Objective

Learn the fundamentals of WebRTC by building a minimal working audio call:

- Microphone access
- Peer-to-peer connection
- Offer / Answer exchange
- ICE candidate handling
- Socket-based signaling

---

## 🧠 Concepts Covered

- `getUserMedia()` (Audio)
- `RTCPeerConnection`
- SDP (Offer & Answer)
- ICE Candidates
- STUN Server
- Socket.IO Signaling

---

## 📁 Project Structure

```bash
webrtc-audio/
│
├── server/
│   └── index.js
│
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
```

---

## 🛠 Tech Stack

- React + Vite
- Node.js + Express
- Socket.IO
- WebRTC APIs

---

## ⚙️ Setup Instructions

### 1️⃣ Start Server

```bash
cd server
npm install
node index.js
```

### 2️⃣ Start Client

```bash
cd client
npm install
npm run dev
```

### 3️⃣ Test the App

- Open **2 browser tabs**
- Use:
  - Tab 1 → `user1`
  - Tab 2 → `user2`
- Click **Call**

---

## 🔄 How It Works

1. User joins using a username
2. Caller creates an offer
3. Offer is sent via Socket.IO
4. Receiver sends back an answer
5. ICE candidates are exchanged
6. Audio stream starts (P2P)

---

## ⚠️ Limitations

- No UI/UX improvements
- No call controls
- No TURN server (may fail on strict networks)

---

## 🎯 Purpose

This project is meant for:
👉 Understanding WebRTC fundamentals before building advanced apps

---

## 🚀 Next Step

Move to the **Video Call** project for advanced implementation.