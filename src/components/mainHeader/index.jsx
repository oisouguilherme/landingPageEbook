import style from './style.css'
import logo from '../../assets/logo.png'
import livro3 from '../../assets/livro3.png'

function MainHeader() {
  return(
    <div className='container'>
      <header className='header'>
        <img src={logo} alt="" />
      </header>
      <main className='main'>
        <div className='main_txt'>
          <strong>FREE EBOOK</strong>
          <h1>Dobre Suas Vendas Pelo WhatsApp</h1>
          <p>Aprenda a vendar mais usando o <strong>WhatsAppp</strong>  e aumente o seu lucro.</p>
          <button>Compre aqui</button>
        </div>
 
          <img src={livro3} alt="" />
        
      </main>
    </div>
  )
}

export default MainHeader