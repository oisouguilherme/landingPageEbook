import style from './style.css'
import livro2 from '../../assets/livro2.jpg'

function MainHeader() {
  return(
    <div className='container'>
      <main className='main'>
        <div className='main_txt'>
          <strong>EBOOK</strong>
          <h1>Dobre Suas Vendas Pelo WhatsApp</h1>
          <p>Aprenda a vender mais usando o <strong>WhatsApp</strong>  e aumente o seu lucro.</p>
          <div className='preco'>
            <div className='valores'>
              <p> <strong>De:</strong> <s>R$ 69,99</s></ p>
              <p><strong>Por:</strong> R$ 19,90</p>
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