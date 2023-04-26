import React, { useEffect, useState } from 'react';
import { notes } from './data/notes';
import { Notes } from './components/Notes';
import { Header } from './components/Header';
import axios from 'axios';
import { INotes } from './models';

function App() {

  // const [notes, setNotes] = useState()

  async function fetchNotes() {
    const res = await axios.get<INotes[]>('http://localhost:5000/api/note/')
    console.log(res)
  }

  useEffect(() => {
    fetchNotes()
    }, [])

  return (
    <div className='bg-slate-700'>
      <Header/>
      <div className='container mx-auto max-w-2xl pt-5'>
        <Notes notes={notes[0]}/>
      </div>
    </div>
  );
}

export default App;
