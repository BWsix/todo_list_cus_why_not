import { useState, useEffect, useRef } from 'react'

import List from './components/List'
import './App.css'

import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { v4 as uuid_v4 } from "uuid";

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState} from 'react-firebase-hooks/auth'

firebase.initializeApp({
  apiKey: "AIzaSyBIi3TG_NqXzCjwzl7g7IdcsSICfeUm8yI",
  authDomain: "test01-e5d31.firebaseapp.com",
  projectId: "test01-e5d31",
  storageBucket: "test01-e5d31.appspot.com",
  messagingSenderId: "858569537263",
  appId: "1:858569537263:web:946b2bcbfd84c98962cd1a",
  measurementId: "G-L5WS4LDD4M"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  const [user] = useAuthState(auth)

  const inputField = useRef()
  const [input, setinput] = useState("")
  const [tasks, settasks] = useState([])
  const [is_signin, setis_signin] = useState(false)

  
  useEffect(() => {
    if(is_signin){
      const DBref = firestore.collection("Todo List").doc(auth.currentUser.uid)
      DBref.get().then(snapshot => {
        settasks(snapshot.data().file);
      })
    }
  }, [is_signin])
  auth.onAuthStateChanged(user => setis_signin(user))

  useEffect(() => {
    if(!is_signin) return
    firestore.collection('Todo List')
      .doc(auth.currentUser.uid)
      .set({file: tasks, uid: auth.currentUser.uid}, {merge: true})
  }, [tasks])
  
  function handle_signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  function handle_signOut() {
    if(auth.currentUser) {
      auth.signOut()
    }
  }

  function handle_check(key) {
    const tmp = [...tasks]
    const target = tmp.find(task => task.key === key)
    target.is_fin = !target.is_fin
    settasks(tmp)
  }


  function handle_add() {
    const user_input = input
    if(input === '') return

    settasks(tasks => [...tasks, {name: user_input, is_fin: false, key: uuid_v4()}])  
    setinput("")
    inputField.current.focus()
  }
  function handle_sort() {
    const tmp = [...tasks].sort((a,b) => a.name.localeCompare(b.name))
    settasks(tmp)
  }
  function handle_delete() {
    settasks(tasks.filter(task => !task.is_fin))
  }
  function handle_clear() {
    settasks([])
  }

  function handle_drag(evt) {
    const { destination, source } = evt

    if(!evt.destination) return 
    if(destination.index === source.index) return    

    const tmp = [...tasks]
    const elem = tmp[source.index]
    tmp.splice(source.index, 1);
    tmp.splice(destination.index, 0, elem);
    
    settasks(tmp)
  }


  return (
    <div className="App">
      <h2>todo list</h2>
      {(user?
        <div>
          <div className="Form">
            <div>
              <input ref={inputField} value={input} placeholder="add a task..."
                onChange={evt => setinput(evt.target.value)}
                onKeyDown={evt => (evt.key !== 'Enter' ? null : handle_add())}/>
            </div>
            <div>
              <button onClick={handle_add}>add</button>
              <button onClick={handle_sort}>sort</button>
              <button onClick={handle_delete}>delete</button>
              <button onClick={handle_clear}>clear all</button>
              <button onClick={handle_signOut}>sign out</button>
            </div>
          </div>

          <DragDropContext onDragEnd={evt => handle_drag(evt)}>
            <Droppable droppableId="TaskList">
              {(provided, snapshot) => (
                <div
                  className="DropPanel"
                  ref={provided.innerRef} 
                  {...provided.droppableProps}
                >
                  <List tasks={tasks} handle_check={handle_check}/>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      :
        <button onClick={handle_signIn}>login with google</button>
      )}
    </div>
  )
}

export default App;
