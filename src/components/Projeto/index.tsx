// import styled from 'styled-components'
import Paragraph from '../Paragraph'
import Tittle from '../Tittle'
import { Card, LinkButton } from './styles'

// const Card = styled.div`
//   border: 1px solid #c1c1c1;
//   padding: 16px;
// `

const Projeto = () => (
  <Card>
    <Tittle>Projeto Lista de Tarefas</Tittle>
    <Paragraph tipo="secundario">Lista de Tarefas feitas com VueJS</Paragraph>
    <LinkButton>Visualisar</LinkButton>
  </Card>
)

export default Projeto
