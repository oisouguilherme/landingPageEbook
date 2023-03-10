import style from './style.css'

function VaiAprender ({txt,img}){
  return(
    <div className='aprender'>
      <button><img src={img} alt="O que você vai aprender" /></button>
      <p>{txt}</p>
    </div>
          
  )
}

export default VaiAprender