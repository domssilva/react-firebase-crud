import React from 'react';
import {useForm} from 'react-hook-form';
import {addTodo, getTodos} from '../../firebase/utils';

function Crud() {
  const {register, handleSubmit} = useForm();

  const onSubmit = (task) => {
    addTodo(task)
  }

  console.log(getTodos())

  return (
    <section className="page">
      <h3>new todo</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} name="task" required />
        <input type="submit" />
      </form>
      <div>
      </div>
    </section>
  )
}

export default Crud;
