export function CreateTodo(){
    return (
        <div>
            <input style ={
                {
                    padding: '10px',
                    margin: '20px'
                }
            } type="text" placeholder="title" />
            <input style ={
                {
                    padding: '10px',
                    margin: '20px'
                }
            }  type="text" placeholder="description" />
            <button style ={
                {
                    padding: '10px',
                    margin: '20px'
                }
            }  >Add todo</button>
        </div>
    )
}