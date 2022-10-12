import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArchiveButton from '../components/ArchiveButton';
import BackButton from '../components/BackButton';
import DeleteButton from '../components/DeleteButton';
import NoteDetail from '../components/NoteDetail';
import { archiveNote, deleteNote, getNote } from '../utils/network-data';

function DetailPage() {
  const { id } = useParams();
  const [ note, setNote ] = React.useState(null);
  const navigate = useNavigate();
  
  React.useEffect(() => {
    const getData = async () => {
      const { error, data } = await getNote(id);
      if(!error) {
        setNote(data);
      }
    }
    getData();
  }, [])


  const onDelete = (id) => {
    deleteNote(id);
    navigate('/');
  }

  const onArchive = (id) => {
    archiveNote(id);
    navigate('/archive');
  }

  if(note !== null) {
    return (
      <>
        <BackButton location={'/'}/>
        <NoteDetail title={note.title} createdAt={note.createdAt} body={note.body}/>
        <DeleteButton id={note.id} onDelete={onDelete}/>
        <ArchiveButton id={note.id} onArchive={onArchive}/>
      </>
    );
  }
}

export default DetailPage;