# Angry Squares.Inc

[My Notes](notes.md)

This is a fundamentally basic game/chatroom webspace designed to grow my skills in animation and game design. 

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Users will be able to control a little avatar of their choices around a grid-based map and chat with other users on the software. They can play games with each other, catch up on life, and experience fun, satisfying controls and animations that other games lack.

### Design

![Design image](temporary.png)

Users will be able to move their avatar around a map and message other players. Functionality like ramming and sprinting will be included in the movement system.

### Key features

- Instant messaging with other users on the game.
- Reactive movement that allows for a tactile and interactive experience.
- Satisfying mechanics that lead to relaxation.

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** -  Uses correct HTML structure for application. Two HTML pages, One for login and one for playing the game. Hyperlinks to save a certain avatar for repeat use.
- **CSS** - Aims for a rather minimalist style that goes easy on the eyes while still featuring bright colors and attractive designs.
- **React** - Provides login, avatar choice, instant messaging, display of other users' messages, and backend endpoint calls. Single page application that is reactive to user's actions.
- **Service** - Backend Services include:
  - retrieving movement commands
  - storing user messages
  - displaying user messages in the game UI
  - allowing the user to display images of dogs with the https://dog.ceo/api/breeds/image/random service. 
- **DB/Login** - Store users, messages, and avatar choices in database. Register and login users. Credentials securely stored in database. Can't play unless authenticated.
- **WebSocket** - Broadcast messages to other players currently active in the game.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://coolsquares-webserver.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Completed.
- [x] **Proper HTML element usage** - Completed.
- [x] **Links** - Completed.
- [x] **Text** - Completed.
- [x] **3rd party API placeholder** - The game portion is represented by a placeholder image. This will be calling 3rd party API's like movement, React, and such. But I could definitely use tips on how to implement this better.
- [x] **Images** - Multiple embedded images.
- [x] **Login placeholder** - Completed.
- [x] **DB data placeholder** - The chat logs are represented by a placeholder image, with functionality to be added later. 
- [x] **WebSocket placeholder** - The chat logs are represented by a placeholder image, with functionality to be added later.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - Done.
- [x] **Navigation elements** - Two pages that can be navigated between.
- [x] **Responsive to window resizing** - Completed.
- [x] **Application elements** - Buttons for sending text and logging in.
- [x] **Application text content** - Used texts for titles and instructions.
- [x] **Application images** - Completed with a image that will represent the game area.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
