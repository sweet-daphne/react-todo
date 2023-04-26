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
  const { register, handleSubmit, formState } = useForm();
  const onVaild = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onVaild)}
      >
        <input {...register('email', { required: true })} placeholder="Email" />
        <input
          {...register('firstName', { required: true })}
          placeholder="First Name"
        />
        <input
          {...register('lastName', { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register('userName', { required: true, minLength: 10 })}
          placeholder="UserName"
        />
        <input
          {...register('password', { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <input
          {...register('password1', {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Your password is too short',
            },
          })}
          placeholder="Password1"
        />

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
