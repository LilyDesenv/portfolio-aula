import styled from 'styled-components'
import { Paragraph } from '../../components/Paragraph/styles'

export const Descricao = styled(Paragraph)`
  margin-top: 24px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    text-align: center;
  }
`

export const BotaoTema = styled.button`
  font-size: 10px;
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corTextoBotao};
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
