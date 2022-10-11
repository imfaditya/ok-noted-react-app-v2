import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import DeleteButton from '../components/DeleteButton';
import NoteDetail from '../components/NoteDetail';
import { getNote } from '../utils/network-data';

function DetailPage() {
  const { id } = useParams();
  const [ note, setNote ] = React.useState(null);
  
  React.useEffect(() => {
    const getData = async () => {
      const { error, data } = await getNote(id);
      if(!error) {
        setNote(data);
      }
    }

    getData();
  }, [])

  if(note !== null) {
    return (
      <>
        <BackButton location={'/'}/>
        <NoteDetail title={note.title} createdAt={note.createdAt} body={note.body}/>
        <DeleteButton id={note.id}/>
      </>
    );
  }


  
}

export default DetailPage;