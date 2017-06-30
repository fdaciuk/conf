import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: '#f0f0f0',
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    }
  }),
  link: css({
    color: '#666666',
  }),
};

class TextSponsor extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="SEJA UM PATROCINADOR" subtitle='APOIE O EVENTO E FAÇA SUA MARCA APARECER'>
          <p>Acesse o Mídia Kit do evento e atrele a sua marca a comunidade: <br/>
            <a target="_blank" href="https://docs.google.com/presentation/d/1eRD0uZ8RQVv4Xvoe8taeZvYX-VUFx8KDX7gbVWS0WEw/pub?start=false&loop=false&delayms=3000&slide=id.p" {...styles.link}>
              <b>Mídia Kit React Conf Brasil 2017</b>
            </a>
          </p>
          <p>Informações sobre cotas de patrocínio e apoios: <br/>
            <a href="mailto:reactconfbr@gmail.com"  {...styles.link}><b>reactconfbr@gmail.com</b></a>
          </p>
        </Text>
      </div>
    );
  }
}

export default TextSponsor;
