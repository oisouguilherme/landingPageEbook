import style from './style.css'
import livro2 from '../../assets/livro2.jpg'

function MainHeader() {
  return(
    <div className='container'>
      <main className='main'>
        <div className='main_txt'>
          <strong>EBOOK GRÁTIS</strong>
          <h1>Dobre Suas Vendas Pelo WhatsApp</h1>
          <p>Aprenda a vender mais usando o <strong>WhatsApp</strong>  e aumente o seu lucro.</p>
          <div className='preco'>
            <a href='https://pay.kiwify.com.br/FSZfRi1' target={'_blank'}>PREENCHA O FORMULÁRIO</a>

          </div>
        </div>
 
          <img src={livro2} alt="Ebook Dobre suas vendas pelo WhatsApp" />
        
      </main>
    </div>
  )
}

export default MainHeader