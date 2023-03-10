
import style from './style.css'
import livro2 from '../../assets/livro3.png'
import VaiAprender from './VaiAprender'
import funnel from '../../assets/funnel.svg'
import cashcoin from '../../assets/cash-coin.svg'
import creditBack from '../../assets/credit-card-2-back.svg'
import personAdd from '../../assets/person-add.svg'
import coin from '../../assets/coin.svg'
import wallet from '../../assets/wallet2.svg'
function MainFooter (){
  return(
    <div className='container_footer'>
      <div className='main_footer'>
          <img src={livro2} alt="Imagem da capa do Ebook" />
          <div className='txt_aprender'>
            <h2>O que você vai aprender:</h2>
            <div className='buttons_aprender'>
              <VaiAprender txt="Técnicas de vendas que levam pessoas até o WhatsApp" img={cashcoin} />
              <VaiAprender txt="Funil de vendas que integrem Instagram e WhatsApp" img={funnel}/>
              <VaiAprender txt="As principais vantagens do WhatsApp Business" img={creditBack}/>
              <VaiAprender txt="Como usar influencer's em suas campanhas de vendas" img={wallet}/>
              <VaiAprender txt="Como fazer campanhas que levem pessoas ao WhatsApp" img={personAdd}/>
              <VaiAprender txt="Os passos para criar um script de vendas" img={coin}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MainFooter