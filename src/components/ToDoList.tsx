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

/*interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  password1: string;
  extreaError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    },
  });
  const onVaild = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        'password1',
        { message: 'Password are not the same' },
        { shouldFocus: true }
      );
    }
    //setError('extreaError', { message: 'Sever offline' });
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onVaild)}
      >
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: 'Only naver.com emails allowed',
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register('firstName', {
            required: 'write here',
            validate: {
              noSuelrin: (value) =>
                value.includes('suelrin') ? 'no suelrin allowed' : true,
              noDaphne: (value) =>
                value.includes('daphne') ? 'no daphne allowed' : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register('lastName', { required: 'write here' })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register('userName', { required: 'write here', minLength: 10 })}
          placeholder="UserName"
        />
        <span>{errors?.userName?.message}</span>
        <input
          {...register('password', { required: 'write here', minLength: 5 })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
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
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extreaError?.message}</span>
      </form>
    </div>
  );
}*/
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, toDoSelector, toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
