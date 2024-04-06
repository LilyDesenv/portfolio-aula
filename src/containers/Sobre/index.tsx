import Tittle from '../../components/Tittle'
import Paragraph from '../../components/Paragraph'
import { GithubSecao } from './styles'
const Sobre = () => (
  <section>
    <Tittle fontSize={16}>Sobre mim</Tittle>
    <Paragraph tipo="principal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est cupiditate
      rerum officia blanditiis aperiam, minus enim ut. Voluptates laborum,
      maiores at accusantium, quod consequatur consectetur iusto quia
      necessitatibus voluptatibus tempore.Lorem ipsum dolor sit, amet
      consectetur adipisicing elit. Est cupiditate rerum officia blanditiis
      aperiam, minus enim ut. Voluptates laborum, maiores at accusantium, quod
      consequatur consectetur iusto quia necessitatibus voluptatibus tempore.
    </Paragraph>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=LilyDesenv&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=LilyDesenv&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
