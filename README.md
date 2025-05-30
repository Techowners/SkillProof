# SkillProof

**Decentralized, Verifiable, and User-Owned Skill Credentialing System**

---

## 🚀 Project Overview

SkillProof bridges the gap between learning and trust by providing a decentralized platform that issues **tamper-proof skill credentials** using blockchain technology. By leveraging **Soulbound NFTs**, on-chain profiles, and a reputation system, SkillProof empowers learners with permanent, verifiable proof of skills, while enabling employers to instantly and transparently verify talent.

---

## 🌟 Key Features

- **Skill Assessment Modules:** Quizzes and project submissions to validate skills.  
- **On-Chain Skill Credentials:** Mint non-transferable Soulbound Tokens (SBTs) representing verified skills.  
- **Decentralized User Profiles:** Wallet-linked dashboards aggregating all verified credentials.  
- **Reputation System:** Issuers earn credibility points based on learner endorsements and success.  
- **Verifier Portal:** Employers can instantly verify credentials on-chain, reducing hiring friction.  
- **Global & Cross-Platform:** Interoperable skills that travel with the learner anywhere in the world.

---

## 📦 Tech Stack

| Layer             | Technology                                  |
|-------------------|---------------------------------------------|
| Frontend          | React.js + Tailwind CSS                      |
| Smart Contracts   | Solidity + Hardhat                           |
| Backend           | Node.js + Express.js OR Spring Boot          |
| Blockchain        | Polygon (testnet/demo) or Ethereum           |
| NFTs              | ERC-721 with custom Soulbound logic          |
| Wallet Integration| MetaMask via wagmi or web3modal               |
| Storage           | IPFS (Filecoin/Pinata) for NFT metadata       |
| Authentication    | Wallet-based auth (Sign-in with Ethereum)     |
| DAO Module        | Snapshot / XDAO or custom voting contracts    |
| Hosting           | Vercel (frontend), Render (backend), IPFS     |

---

## 🎯 Why SkillProof?

- Builds **trusted, verifiable skill credentials** that can’t be faked or transferred.  
- Puts control of credentials in the hands of the learner, not a centralized platform.  
- Supports **non-traditional education** paths with real-world credibility.  
- Enables employers to make **faster, smarter hiring decisions** based on verified skills.  
- Creates a **skills-first, global workforce** ecosystem.

---

## 💻 Getting Started

### Prerequisites

- Node.js (v14+)  
- MetaMask or compatible Ethereum wallet  
- Hardhat (for smart contract development)

### Installation

```bash
git clone https://github.com/yourusername/skillproof.git
cd skillproof

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
