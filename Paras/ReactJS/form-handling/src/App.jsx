import './App.css'
import { useForm } from 'react-hook-form'

function App() {
   const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },d*1000)
    })
  }

  const onSubmit= async(data)=>{
    await delay(2);  //simulating network delay
    console.log(data);
    console.log('username = ',data.username)
    if(data.username !=="Paras"){
      setError("myForm",{message:"Your form is not in good order because username is invalid"})
    }
    if(data.username =='Admin'){
      setError("myForm",{message:'This user is blocked'})
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      {isSubmitting && <div>Loading....</div>}
        <input placeholder="username" {...register("username", {required:{value:true, message:"This field is required"}, minLength:{value:3,message:"Min length is 3"}, maxLength:{value:8,message:"Max length is 8"}})} type="text"  />
        {errors.username && <div className='red'>{errors.username.message}</div>}
        <input placeholder='password' {...register("password", {required:{value:true, message:"This field is required"}, minLength:{value:3,message:"Min length is 3"}, maxLength:{value:8,message:"Max length is 8"}})} type="password"  />
        {errors.password && <div className='red'>{errors.password.message}</div>}
        <input disabled={isSubmitting} type="submit" value="Submit"/>
        {errors.myForm && <div className='red'>{errors.myForm.message}</div>}
      </form>
    </>
  )
}

export default App
