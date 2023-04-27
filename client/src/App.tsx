import { Notes } from './components/Notes';
import { Header } from './components/Header';
import { useNotes } from './hooks/notes';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { CreateNote } from './components/CreateNote';

function App() {

  const {notes, loading} = useNotes()

  return (
    <div className='bg-slate-700'>
      <Header/>
      { loading && <Loader/> }
      <div className='container mx-auto max-w-2xl pt-5'>
        <Notes notes={notes}/>
      </div>
      <Modal>
        <CreateNote/>
      </Modal>
    </div>
  );
}

export default App;
