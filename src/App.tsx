import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { ITask } from './types/task';
import { TaskList } from './components/TaskList';
import { Error } from './components/Error';

export const App = () => {
  const [tasks, setTasks] = useState<Array<ITask>>([]);
 
  const [error, setError] = useState(false);
  const [errorPost, setErrorPost] = useState(false);
  const [errorDelete, setErrorDelete] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const createTask = async (name: string, author: string, date: string, onSuccess: () => void) => {
 
    const request = { name, author, date };
 
    try {
      setIsCreatingTask(true)
      const data = await axios.post('http://localhost:3000/task', request);
      setTasks([...tasks, data.data]);
      onSuccess();
      setErrorPost(false)
    } catch (error) {
      console.log(error);
      setErrorPost(true)
    } finally {
      setIsCreatingTask(false)
    }
  };
 
  // console.log(tasks);
 
  const readTask = async () => {
    setLoader(true);
    try {
      const data = await axios.get('http://localhost:3000/task');
      setTasks(data.data);
      console.log(tasks);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const deletedTask = async (idToPersonDelete: string) => {
    setLoader(true);
    try {
      await axios.delete(`http://localhost:3000/task/${idToPersonDelete}`)
      setErrorDelete(false)
    } catch (error) {
      setErrorDelete(true);
      console.log(error);
    } finally {
      setLoader(false);
      readTask()
    }
  };

  useEffect(() => {
    readTask();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  return (
    <section>
      <Header />
      {error && <Error message='Un error en el servidor' />}
      {loader && <Loader />}
      <section>
        <Form error={errorPost} loading={isCreatingTask} onSubmit={createTask} />
      </section>
 
      <TaskList error={errorDelete} tasks={tasks} deleteTask={deletedTask} />
    </section>
  );
};