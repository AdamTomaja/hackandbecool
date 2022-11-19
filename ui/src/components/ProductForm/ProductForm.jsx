import {useState, useEffect} from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postProduct } from '../../services/ProductServices';

const ProductForm = () => {
    const { register, handleSubmit, setValue ,formState: errors } = useForm();
    const onSubmit = data => {  
        postProduct(data).then((promise) => {
                if(promise.requestStatus == 201) {
                    setToastVisibility(true);
                    setToastStatus(true);
                    return;
                } else {
                    setToastVisibility(true);
                    setToastStatus(false);
                };
            })
    };

    const [add, setAdd] = useState(false);

    const [familiesData , setFamiliesData] = useState();
    const [toastVisibility, setToastVisibility] = useState(true);
    const [toastStatus, setToastStatus] = useState(false);
    const [famillyStatus, setFamillyStatus] = useState(false);

    
    useEffect(() => {
        // getFamillies().then((promise) => {
        //     if(promise.succeded && promise.requestStatus !== 200) {
        //         setFamillyStatus(true);
        //         return;
        //     } else if(promise.succeded && promise.requestStatus === 200)  {
 
        //         setFamiliesData(promise.data);
        //     } 
        // })
        // return () => {
        //     setToastVisibility(false);
        // };
    }, []);

    const notify = () => {
        if(toastVisibility && toastStatus) {
            toast.success("Dodano poprawnie!", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        } else if (toastVisibility && !toastStatus) {
            toast.error("Nie udało się dodać.", {
                position: toast.POSITION.BOTTOM_RIGHT
              });
        } 
    };


return (
        <>
        <div className='items-center justify-center'>
            {!add ? <button className="btn-accent max-h-10 min-w-50 py-1 px-2 mx-1 rounded my-1 border border-black" onClick={() => {setAdd(!add)}}>{add ? "Zamknij" : "Dodaj produkt"}</button> : <></>}
        </div>
            {add ? 
            <>
             <div className="card w-96 bg-base-100 shadow-xl border border-black items-center justify-center">
                <div className="card-body">
                    <h2 className="card-title -pt-2">{"Dodawanie produktu"}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder="Wpisz produkt" className="input input-bordered w-full max-w-xs py-2" 
                    {...register("code", {required: "To pole jest wymagane.", minLength: {value: 3, message: "Minimalna długość to 3"}})}/>
                    <p className='pt-1'>{errors.code?.message} </p> 

                    <input type="text" placeholder="Wpisz datę ważności" className="input input-bordered w-full max-w-xs py-2"  
                    {...register("labels.0.value" ,  {required: "To pole jest wymagane.", minLength: {value: 3, message: "Minimalna długość to 3"}})} />
                    <p className='pt-1'>{errors.labels?.[0]?.value?.message}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary -py-2" 
                        type="submit" onClick={() => {
                            setValue('labels.0.code', "pl_PL");
                            notify();             
                            }}>{"Dodaj"}</button>
                    </div> 
                </form>
                <ToastContainer />
                </div>
             </div>
          </>
            : 
        <></>
            }
    </>
    )
};


export default ProductForm;
