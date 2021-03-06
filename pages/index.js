import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props) {
  return (
    <Box as='aside'>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className='boxLink' href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const usuarioAleatorio = 'iagoizi';
  const pessoasFavoritas = ['DanielleEmely', 'Cesar-Danilo', 'joaovitorvaz', 'lsclgr', 'pmalaquias', 'dan-ueno'];
  const [comunidades, setComunidades] = React.useState([
    {
      id: '12802378123789378912789789123896124',
      title: 'Vittar Lovers',
      image: 'https://i.imgur.com/kcJgQ2H.gif',
      url: 'https://www.facebook.com/vittar.lovers.oficial.fc/community',
    },
    {
      id: '12802378123789378912789789123896179',
      title: '한국에 관심이 있는 사람',
      image: 'https://th.bing.com/th/id/OIP.ilo5uXnxqtBq-WecJgVdlgHaJ0?pid=ImgDet&rs=1',
      url: 'https://www.facebook.com/groups/1669301129996963/',
    },
    {
      id: '12802378123789378912789789123896123',
      title: 'Broadway Meme',
      image: 'https://th.bing.com/th/id/OIP.RhH8IBy6YigfDBM6yT8joAHaEK?pid=ImgDet&rs=1',
      url: 'https://www.facebook.com/groups/379225282231132',
    },
  ]);

  return (
    <>
      <AlurakutMenu githubUser={usuarioAleatorio} />
      <MainGrid>
        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className='title'>Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className='subTitle'>O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);
                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                  url: dadosDoForm.get('url'),
                };
                if (comunidades.length < 6) {
                  const comunidadesAtualizadas = [...comunidades, comunidade];
                  setComunidades(comunidadesAtualizadas);
                }
              }}
            >
              <div>
                <input
                  placeholder='Qual vai ser o nome da sua comunidade?'
                  name='title'
                  aria-label='Qual vai ser o nome da sua comunidade?'
                  type='text'
                />
              </div>
              <div>
                <input
                  placeholder='Coloque uma URL para usarmos de capa'
                  name='image'
                  aria-label='Coloque uma URL para usarmos de capa'
                />
              </div>
              <div>
                <input
                  placeholder='Coloque o link para sua comunidade'
                  name='url'
                  aria-label='Coloque o link para sua comunidade'
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div className='profileRelationsArea' style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>Comunidades ({comunidades.length})</h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={itemAtual.url /*`/users/${itemAtual.title}`*/}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>Pessoas da comunidade ({pessoasFavoritas.length})</h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
