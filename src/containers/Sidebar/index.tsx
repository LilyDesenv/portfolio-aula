import Tittle from '../../components/Tittle'
import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Tittle fontSize={20}>Alissandra Oliveira</Tittle>
      <Paragraph tipo="secundario" fontSize={16}>
        LilyDesenv
      </Paragraph>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedora Full Stack
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)
export default Sidebar
