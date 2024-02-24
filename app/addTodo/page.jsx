export default function AddTopic(){

  return (
    <form className="flex flex-col gap-3">

  <input className="border border-slate-500 px-8 py-2" 
    type="text"
    placeholder="Todo Task"
  />

  <button className="bg-green-600">Add</button>

    </form>
  )
}