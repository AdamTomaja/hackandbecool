import {useState, useEffect} from 'react';
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postProduct } from '../../services/ProductServices';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ProductForm = () => {
    const [startDate, setStartDate] = useState(new Date());

    const { register, handleSubmit, setValue, formState: errors } = useForm();

    let today = new Date();
    console.log(today);
    
    const notBefore = today.setDate(today.getDate() + -1) >= startDate;

    const onSubmit = data => {  
        data.date = startDate;
        postProduct(data).then((promise) => {
                if(promise.requestStatus === 200) {
                    console.log(data);
                    setToastVisibility(true);
                    setToastStatus(true);
                    return;
                } else {
                    console.log(data);
                    setToastVisibility(true);
                    setToastStatus(false);
                };
            })
    };

    const [add, setAdd] = useState(false);
    const [toastVisibility, setToastVisibility] = useState(true);
    const [toastStatus, setToastStatus] = useState(false);

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

        const control = "dupa";

return (
        <>
        <div className='items-center justify-center'>
            <button className="btn-accent max-h-10 min-w-50 py-1 px-2 mx-1 rounded my-1 border border-black" onClick={() => {setAdd(!add)}}>{add ? "Zamknij" : "Dodaj produkt"}</button>
        </div>
            {add ? 
            <>
             <div className="card w-96 bg-base-100 shadow-xl border border-black items-center justify-center">
                <div className="card-body">
                    <h2 className="card-title -pt-2">{"Dodawanie produktu"}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder="Wpisz produkt" className="input input-bordered w-full max-w-xs py-2" 
                    {...register("name", {required: "To pole jest wymagane.", minLength: {value: 3, message: "Minimalna długość to 3"}})}/>
                    <p className='pt-1'>{errors.name?.message} </p> 

                    <label className="label" >
                        <span className="label-text pt-1">Wybierz datę ważności</span>
                        <span className="label-text-alt">
                        </span>
                    </label>
                    {/* <Controller
                    control={control}
                    render={({ onChange, value }) => (
                        <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        />
                    )}
                    /> */}
                    <DatePicker className="z-1 input-bordered" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <p className='justify-start pt-1'>{notBefore ? "Data nie może być w przeszłości" : ""}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary -py-2" 
                        type="submit" disabled={notBefore} onClick={() => {
                            setValue("status", "NEED_TO_BUY");
                                notify();              
                            }}>Dodaj</button>
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
