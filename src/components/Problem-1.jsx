import React, {useState} from 'react';

const Problem1 = () => {
    const [tasks, setTasks] = useState([]);
    const [show, setShow] = useState('all');



    let activeee;

    const handleClick = (val) =>{
        console.log("val", val)
        setShow(val);

        if (show == 'active') {
            return tasks.filter(task => task.status === 'active');

          } else if (show == 'completed') {
            return tasks.filter(task => task.status === 'completed');
          }else {
            return tasks.sort((a, b) => {
              if (a.status === 'active' && b.status !== 'active') return -1;
              if (a.status !== 'active' && b.status === 'active') return 1;
              if (a.status === 'completed' && b.status !== 'completed') return -1;
              if (a.status !== 'completed' && b.status === 'completed') return 1;
              return 0;
            });
          }
    }









    var arrayData = []
    const handleSubmitData = (event) => {
        event.preventDefault()
        
        const name = event.target.name.value 
        const status = event.target.status.value
        
        const data = {
           name: name,
           status: status
        }
        // console.log(data)
    setTasks([...tasks, data]);




        arrayData.push(data)
    localStorage.setItem("data", JSON.stringify(arrayData))
    }

    console.log("task", tasks)






    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmitData}>
                        <div className="col-auto">
                            <input type="text" name='name' className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input type="text" name='status' className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit"  className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            

                        </tr>
                        </thead>
                        
                        <tbody>
          {tasks?.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;