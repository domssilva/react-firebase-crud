import React from 'react';
import {storage} from '../../firebase';
import {useForm} from 'react-hook-form';

function FileUpload() {
  const {register, handleSubmit} = useForm();

  const onSubmit = data => {
    const uploadedFile = data.signed_document[0]
    const storageRef = storage.ref()
    const fileRef = storageRef.child(uploadedFile.name)
    
    fileRef
      .put(uploadedFile)
      .then(() => {
        console.log('file uploaded')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} type="file" name="signed_document" required/>
      <button>submit</button>
    </form>
  );
}

export default FileUpload
