import {useState, useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { getHabitsList } from '../../services/HabitsServices';

export const HabitsList = () => {

    const [habitsList , setHabitsList] = useState();
    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        let lowerCaseText = e.target.value.toLowerCase();
        setInputText(lowerCaseText);
      };

      const filteredData = habitsList?.filter((el) => {
        if (el?.title === '' || el?.description === '') {
            return el;
        }
        else {
            return el?.title?.toLowerCase().includes(inputText)
                || el?.description?.toLowerCase().includes(inputText);
        };
    });

    useEffect(() => {
      getHabitsList().then((promise) => {
            if(promise.succeded && promise.requestStatus !== 200) {
                return;
            }  else if(promise.succeded && promise.requestStatus === 200)  {
              setHabitsList(promise.data);
            } 
        })
    }, [habitsList])

    return (
<div>
  <div className="form-control py-2">
    <div className="input-group">
      <input type="text" placeholder="Search…" className="input input-bordered" onChange={inputHandler} />
  </div>
</div>
        
<div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
          <td><h1>Here's some good to follow rules to reduce wasting</h1></td>
          <td><button className="btn-accent max-h-10 min-w-50 py-1 px-2 mx-1 rounded my-1 border border-black" onClick={() => {}}>"Add rule"</button></td>
      </tr>
    </thead>
    <tbody>
    {
    filteredData?.map((el , index ) => {
      return (
    <tr className="hover" key={el?.id}>
        <td className=''>  
            <div className="font-bold flex justify-start items-center">
                {el?.title}
            </div>
            <div className="font-bold flex justify-start items-center">
                {el?.title}
            </div>
        </td>
    </tr>
      )
})
    } 
    </tbody>
  </table>
</div>
        </div>
    )
};

export default HabitsList;
