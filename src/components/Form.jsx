
const Form = () => {
  return (
    <div>
        <form action="" method="post" className="col-8 mx-auto justify-content-evenly">
            <input type="text" name="firstname" placeholder="firstname" className="form-control my-2" />
            <input type="text" name="lastname" placeholder="lastname" className="form-control my-2"/>
            <input type="text" name="email" placeholder="email" className="form-control my-2"/>
            <input type="text" name="password" placeholder="password" className="form-control my-2"/>
        </form>
    </div>
  )
}

export default Form