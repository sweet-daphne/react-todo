import { useState } from 'react';
import { useForm } from 'react-hook-form';

/*function ToDoList() {
  const [toDo, setTodo] = useState('');
  const [toDoError, setTodoError] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodoError('');
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setTodoError('To do should be longer');
    }
    console.log('submit');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write ad to do" />
        <button>Add</button>
        {toDoError !== '' ? toDoError : null}
      </form>
    </div>
  );
}*/

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register('email')} placeholder="Email" />
        <input {...register('firstName')} placeholder="First Name" />
        <input {...register('lastName')} placeholder="Last Name" />
        <input {...register('userName')} placeholder="UserName" />
        <input {...register('password')} placeholder="Password" />
        <input {...register('password1')} placeholder="Password1" />

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
