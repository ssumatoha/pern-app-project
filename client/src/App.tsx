import React, { useEffect, useState } from 'react';
import { Notes } from './components/Notes';
import { Header } from './components/Header';
import axios from 'axios';
import { INote, INotesResponse } from './models';

function App() {

   const [notes, setNotes] = useState<INotesResponse>({
    count: 0,
    rows: []
   })

  async function fetchNotes() {
    const res = await axios.get<INotesResponse>('http://localhost:5000/api/note/')
    setNotes(res.data)
    console.log(res)
  }

  useEffect(() => {
    fetchNotes()
    }, [])

  return (
    <div className='bg-slate-700'>
      <Header/>
      <div className='container mx-auto max-w-2xl pt-5'>
        <Notes notes={notes}/>
      </div>
    </div>
  );
}

export default App;
