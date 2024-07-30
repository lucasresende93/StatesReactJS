'use client'
import { useState } from "react";

type TodoItem = {
  task: string;
  checked: boolean
}


const Page = () => {


  const [task, setTask] = useState<string>('')

  //Sempre criar uma novo array para fazer uma nova alteração no state
  const [list, setList] = useState<TodoItem[]>([
    { task: 'Teste', checked: false },
  ]);

  const handleAddTask = () => {
    if (task === '') return;
    setList([...list, { task: task, checked: false }]); //copia o original (...list) e adiciona o novo
    setTask('');  //limpa o campo de input
  }

  const handleDeleteItem = (itemToDelete: TodoItem) => {
    setList(list.filter(item => item !== itemToDelete)); //retorna true para todos que são diferente,
    //se for true irá permanecer na lista, se for false vai ser removido
    alert(`Item "${itemToDelete.task}" deletado`);

  }
  const toggleItem = (item: TodoItem) => {
    setList(list.map((i) => (i === item ? { ...i, checked: !i.checked } : i))); //percorre todo array, 
    // o item recebido é igual ao index do array?
    //se sim, copia o array de i e muda o checked, se não, permanece o checked
  };

  return (
    <div className="w-screen h-screen  flex flex-col junstify-center items-center text-3xl">
      <input type="text" 
      className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm 
      rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
      dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      placeholder="Digite uma nova tarefa" 
      value={task} 
      onChange={(e) => setTask(e.target.value)} 
      />

      <button className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
       focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
       focus:outline-none dark:focus:ring-blue-800" 
       onClick={handleAddTask}>
        Adicionar
        </button>

      <p>{list.length} Itens na Lista:</p>

      <ul className="text-3xl">

        {list.map((item, index) => (
          <li key={index}>    {/*chave de acordo com o index*/}
            <input type="checkbox" checked={item.checked} className="w-6 h-6 mr-3" onClick={() => toggleItem(item)}></input>

            {item.task}  <button onClick={() => handleDeleteItem(item)}>[ deletar ]</button>
          </li>
        ))}


      </ul>
    </div>
  );
}

export default Page;

