import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
 function Deneme(props) {
   // const notify = () => toast("Wow so easy!");
  const {kisiler,submitFn}=props;
    const {
      control,
      register,
      handleSubmit,
    
      formState: { errors, isValid }
    } = useForm({
      mode: "onChange",
      defaultValues: {
        checkbox: false,
      }
    });
  
    function gonder(data) {
      console.log("servera gönder: ", data);
    }
  
    console.log("hatalar", errors);

    function MyhandleSubmit(data) {
     console.log(data);
      submitFn({
       ...data,
        id: nanoid(5),
        status: "yapılacak",
      });
    }
return (
<form className="taskForm" onSubmit={handleSubmit(MyhandleSubmit)}>
  
      <div className="form-line">
        

        <label className="input-label">
          Başlık
        </label>
        <input
          className="input-text"
          id="title"
          name="title"
          {...register("title", {
            required: "Task Başlığı Yazmalısınız",
            minLength: {
              value: 3,
              message: "Task başlığı en az 3 katakter olmalıdır",
            },
          })}                               
   
         
        />
     </div>
        {errors.title && (
          <div style={{ color: "red", fontSize: 12 }}>
            {errors.title.message}
          </div>
        )}
 <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <textarea
          className="input-textarea"
          id="description"
          name="description"
          {...register("description", {
            required: "Task Başlığı Yazmalısınızzz",
            minLength: {
              value: 10,
              message: "Task açıklaması en az 10 katakter olmalıdır",
            },
          })}                               
        ></textarea>
       {errors.description && (
          <div style={{ color: "red", fontSize: 12 }}>
            {errors.description.message}
          </div>
        )}
      </div>
      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        <div>
          {kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input
                type="checkbox"
                name="people"
                value={p}
               
                {...register("people", {
                  required: "En az bir kutu seçiniz",
                  
                  validate: {
                   
                    lessThanTen: v => v.length <= 3 || "en fazla 3 kişi seçin",
                     
                    }
                })}
              
              />
              {p}
            </label>
          ))}
        </div>
        {errors.people &&  (
  <div style={{ color: "red", fontSize: 12 }}>{errors.people.message}</div>
)}
    </div>
    
    <div className="form-line">
        <button
          className="submit-button"
          type="submit"
          disabled={!isValid}
        >
          Kaydet
        </button>
        
      </div>
      
      </form>
     

);
}

export default Deneme;