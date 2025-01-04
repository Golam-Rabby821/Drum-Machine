# 🥁 Drum Machine Web App  

A feature-rich drum machine built with **React** and **Tailwind CSS**. This project allows users to play drum sounds either by clicking on the drum pads or using their keyboard. Designed to meet the specified user stories for interactive and responsive functionality.

---

## 🚀 Live Demo  

Check out the live version of the Drum Machine:  
🔗 [Drum Machine Web App](https://golam-rabby-drum-machine.netlify.app/)

---

## 📸 Preview
![image](https://github.com/user-attachments/assets/4339bf74-8339-4e1d-a2d2-211eb675452f)


## 📝 Features  

- **Responsive Design**: Tailored for both desktop and mobile devices using Tailwind CSS.  
- **Keyboard Support**: Trigger drum sounds by pressing designated keys (`Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`).  
- **Clickable Drum Pads**: Each drum pad triggers a unique sound upon click.  
- **Display Panel**: Shows the name of the sound currently being played.  
- **Interactive Feedback**: Drum pads visually respond to user interactions (clicks or key presses).  
- **React-Powered**: Built with React for a modular, reusable, and dynamic codebase.

---

## 📚 User Stories  

1. **Outer Container**: The app contains an outer container with an `id="drum-machine"` that wraps all elements.  
2. **Display**: A `#display` element to show the name of the triggered sound.  
3. **Drum Pads**:  
   - Nine drum pads with `class="drum-pad"`, each having:  
     - A unique `id` describing the audio clip it triggers.  
     - Inner text corresponding to the keys: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C` (in this order).  
   - Each drum pad contains:  
     - An `<audio>` element with:  
       - `src` attribute pointing to the audio file.  
       - `class="clip"` and an `id` matching the parent drum pad's inner text.  
4. **Click Interaction**: Clicking a drum pad plays its corresponding audio.  
5. **Keyboard Interaction**: Pressing the key associated with a drum pad plays its corresponding audio.  
6. **Sound Display**: When a drum pad is triggered, its corresponding sound name is shown in the `#display`.

---

## 🛠️ Technologies Used  

- **Frontend**:  
  - React  
  - Tailwind CSS  

- **Additional Features**:  
  - Audio element manipulation in React.  
  - Keyboard event handling for real-time interactions.  

---

## 🌟 Customizations  

- **Tailwind Utilities**: Enhanced styling with Tailwind’s utility-first approach.  
- **Interactive UI**: Added animations and hover effects for an engaging user experience.  
- **Custom Styling for Drum Pads**:  
  - Each drum pad has a distinct hover and active state.  
  - Visual feedback when a sound is triggered.  

---

## 🔧 Setup and Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/Golam-Rabby821/drum-machine.git
   cd drum-machine

