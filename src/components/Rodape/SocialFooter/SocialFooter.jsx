import './SocialFooter.css'
import LogoFooter from '../../../assets/logo.png'
import Instagran from '../../../assets/instagram.svg'
import Whatsapp from '../../../assets/whatsapp.svg'
import Email from '../../../assets/envelope.svg'

function SocialFooter(){
    return(
        <div className='p'>
            <div className='social-footer'>
                <img src={LogoFooter} alt="" />
                <div className='social-media'>
                    <a href="https://www.instagram.com/oulissesalmeida/" target={'_blank'}><img src={Instagran} alt="link para instagram do Ulisses" /> oulissesalmeida</a>
                    <a href="https://api.whatsapp.com/send?phone=5538998724420" target={'_blank'}><img src={Whatsapp} alt="Meu Whatsapp para contato" />(38) 99872-4420</a>
                    <a href="" target={'_blank'}><img src={Email} alt="email" />suportevqc@gmail.com</a>
                </div>
            </div>
                    <p>© 2023 Venda qualquer coisa - Todos os direitos reservados.</p>
        </div>
    )
}
export default SocialFooter