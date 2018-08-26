import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyCl-yzgfbl34nwgq3nPsVOVySX90eigSPw",
    authDomain: "kanban-andre.firebaseapp.com",
    databaseURL: "https://kanban-andre.firebaseio.com",
    projectId: "kanban-andre",
    storageBucket: "kanban-andre.appspot.com",
    messagingSenderId: "436329048334"
})

export const db = app.database()
export const kanbanRef = db.ref('kanban') 