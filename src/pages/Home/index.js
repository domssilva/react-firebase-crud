import React, {useState} from 'react';
import {addNewField, updateField} from '../../firebase/utils';

function Home() {
  const [firstInputValue, setFistInputValue] = useState('');
  const [secondInputValue, setSecondInputValue] = useState('');
  const [thirdInputValue, setThirdInputValue] = useState('');

  const handleFirstInputChange = (e) => {
    setFistInputValue(e.target.value);
  };

  const handleSecondInputChange = (e) => {
    setSecondInputValue(e.target.value);
  };

  const handleThirdInputValue = (e) => {
    setThirdInputValue(e.target.value);
  };

  const handleCreateField = (e) => {
    e.preventDefault();
    addNewField(firstInputValue);
    setFistInputValue('');
  };

  const handleUpdateField = (e) => {
    e.preventDefault();
    updateField(secondInputValue, thirdInputValue);
    setSecondInputValue('');
    setThirdInputValue('');
  };

  return (
    <div>
      <div>
        <h3>Your new field: </h3>
        <form onSubmit={handleCreateField}>
          <input type="text" value={firstInputValue} onChange={handleFirstInputChange} required/>
          <input type="submit" value="create"/>
        </form>
      </div>
      <div>
        <h3>Update field: </h3>
        <form onSubmit={handleUpdateField}>
          <input type="text" value={secondInputValue} onChange={handleSecondInputChange} required/>
          <input type="text" value={thirdInputValue} onChange={handleThirdInputValue} required/>
          <input type="submit" value="create"/>
        </form>
      </div>
    </div>
  )
}

export default Home
