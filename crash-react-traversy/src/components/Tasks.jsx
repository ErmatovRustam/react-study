import Task from './Task'
const Tasks = (props) => {
    return (
        <>
            {
                props.tasks.map((el, idx) => {
                    return (
                        <Task key={idx } id ={idx} name={el.name} date={el.day} delete={props.delete}/>
                    )
                })
            }  
        </>
    );
            
}
    
export default Tasks
