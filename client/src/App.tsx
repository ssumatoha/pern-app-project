import React from 'react';
import { Note } from './components/Note';
import { notes } from './data/notes';

function App() {
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
        <Note note={notes[0].rows[0]}/>
    </div>
  );
}

export default App;
