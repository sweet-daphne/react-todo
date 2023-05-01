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
import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: 'TO_DO' | 'DOING' | 'DONE';
}

const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: 'TO_DO' },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register('toDo', {
            required: 'Please write a To Do',
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
