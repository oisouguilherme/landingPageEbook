import style from './style.css'
import logo from '../../assets/logo.png'
import livro2 from '../../assets/livro2.png'

function MainHeader() {
  return(
    <div className='container'>
      <header className='header'>
        <img src={logo} alt="Logo venda qualquer coisa" />
      </header>
      <main className='main'>
        <div className='main_txt'>
          <strong>FREE EBOOK</strong>
          <h1>Dobre Suas Vendas Pelo WhatsApp</h1>
          <p>Aprenda a vendar mais usando o <strong>WhatsAppp</strong>  e aumente o seu lucro.</p>
          <div className='preco'>
            <div className='valores'>
              <p> <strong>De:</strong> <s>R$ 70,00</s></ p>
              <p><strong>Por:</strong> R$ 47,00</p>
            </div>
            <a href='https://pay.kiwify.com.br/FSZfRi1' target={'_blank'}>Compre aqui</a>

          </div>
        </div>
 
          <img src={livro2} alt="Ebook Dobre suas vendas pelo WhatsApp" />
        
      </main>
    </div>
  )
}

export default MainHeader