import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArchiveNoteButton from '../components/ArchiveNoteButton';
import BackButton from '../components/BackButton';
import DeleteButton from '../components/DeleteButton';
import NoteDetail from '../components/NoteDetail';
import UnarchiveNoteButton from '../components/UnarchiveNoteButton';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/network-data';
import NotFoundPage from './NotFoundPage';

function DetailPage() {
  const { id } = useParams();
  const [ note, setNote ] = React.useState(null);
  const [ loading, setLoading ] = React.useState(true);
  const navigate = useNavigate();
  
  React.useEffect(() => {
    const getData = async () => {
      const { error, data } = await getNote(id);
      if(!error) {
        setNote(data);
        setLoading(false);
      }
    }
    getData();
  }, [])


  const onDelete = async (id) => {
    const { error } = await deleteNote(id);
    if(!error) {
      navigate('/');
    }
  }

  const onArchive = async (id) => {
    const { error } = await archiveNote(id);
    if(!error) {
      navigate('/');
    }
  }

  const onUnarchive = async (id) => {
    const { error } = await unarchiveNote(id);
    if(!error) {
      navigate('/archive')
    }
  }

  if(loading) {
    return null;
  }

  if(note !== null) {
    let toggleArchiveNote = null;
    if(note.archived) {
      toggleArchiveNote = <UnarchiveNoteButton id={id} onUnarchive={onUnarchive}/>
    } else {
      toggleArchiveNote = <ArchiveNoteButton id={id} onArchive={onArchive}/>
    }

    return (
      <>
        <BackButton location={'/'}/>
        <NoteDetail title={note.title} createdAt={note.createdAt} body={note.body}/>
        <DeleteButton id={note.id} onDelete={onDelete}/>
        {toggleArchiveNote}
      </>
    );
  } else {
    return (
      <NotFoundPage/>
    );
  }
}

export default DetailPage;