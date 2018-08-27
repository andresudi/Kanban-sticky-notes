import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: "AIzaSyCiBFhq8FCdEl6BddbCQ5lNeFo7IbVW7CQ",
  authDomain: "kanban-andre-521a5.firebaseapp.com",
  databaseURL: "https://kanban-andre-521a5.firebaseio.com",
  projectId: "kanban-andre-521a5",
  storageBucket: "kanban-andre-521a5.appspot.com",
  messagingSenderId: "429280752706"
})

export const db = app.database()
export const kanbanRef = db.ref('kanban')
