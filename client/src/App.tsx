import { Notes } from './components/Notes';
import { Header } from './components/Header';
import { useNotes } from './hooks/notes';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { CreateNote } from './components/CreateNote';
import { useState } from 'react';
import { INote } from './models';

function App() {

  const [modal, setModal] = useState(false)

  const {notes, loading, addNote} = useNotes()

  const createHendler = (note: INote) => {
    setModal(false)
    addNote(note)
  }

  return (
    <div className='bg-slate-700'>
      <Header/>
      { loading && <Loader/> }
      <div className='container mx-auto max-w-2xl pt-5'>
        <Notes setModal={setModal} notes={notes}/>
      </div>
      {
      modal && <Modal title='Создать новую запись'>
        <CreateNote onCreate={ createHendler } />
      </Modal>
      }
    </div>
  );
}

export default App;
