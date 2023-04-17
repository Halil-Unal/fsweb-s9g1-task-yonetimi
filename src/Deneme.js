import { useForm } from "react-hook-form";

 function Deneme(props) {
   // const notify = () => toast("Wow so easy!");
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
return (

  
      <div className="form-line">
        
<form className="taskForm" onSubmit={handleSubmit}>
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
          {props.kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input
                type="checkbox"
                name="people"
                value={p}
                control={control}
                rules={{ required: true }}
                {...register("people", {
                  min: {
                  value:1,
                    message: "en az bir kişi seçin"
                  },
                  max: {
                    value:3,
                      message: "en fazla 3 kişi seçin"
                    }
                })}
              
              />
              {p}
            </label>
          ))}
        </div>
        {errors.people && errors.people.type === "min" && (
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
      </div>

);
}

export default Deneme;