import {useState, useEffect} from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postProduct } from '../../services/ProductServices';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ProductAddForm = () => {
    const [startDate, setStartDate] = useState(new Date());

    const { register, handleSubmit, setValue, formState: errors } = useForm();

    let today = new Date();
    
    const notBefore = today.setDate(today.getDate() + -1) >= startDate;

    const onSubmit = data => {  
        data.date = startDate;
        data.status = "IN_STOCK";
        postProduct(data).then((promise) => {
            setToastVisibility(true);
                if(promise.requestStatus === 200) {
                    setToastStatus(true);
                    return;
                } else {
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

return (
    <>
        <div className=''>
            <button className="btn-accent max-h-10 min-w-50 py-1 px-2 mx-1 rounded my-1 border border-black" onClick={() => {setAdd(!add)}}>{add ? "Close" : "Add product"}</button>
        </div>
            {add ? 
            <>
             <div className="card w-96 bg-base-100 shadow-xl border border-black items-center justify-center">
                <div className="card-body">
                    <h2 className="card-title -pt-2">Adding product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder="Enter the product" className="input input-bordered w-full max-w-xs py-2" 
                    {...register("name", {required: "This field is required", minLength: {value: 3, message: "Minimal length is 3"}})}/>
                    <p className='pt-1'>{errors.data?.message} </p> 

                    <label className="label" >
                        <span className="label-text pt-1">Choose expiration date</span>
                        <span className="label-text-alt">
                        </span>
                    </label>
                    <DatePicker className="z-10 input-bordered" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <p className='justify-start pt-1'>{notBefore ? "Date can't be in future" : ""}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary -py-2" 
                        type="submit" disabled={notBefore} onClick={() => {
                            setValue("status", "IN_STOCK");
                                notify();              
                            }}>Add</button>
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


export default ProductAddForm;
