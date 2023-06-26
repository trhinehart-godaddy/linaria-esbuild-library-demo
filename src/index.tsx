import { FC } from 'react';
import { css } from '@linaria/core';
import Main from './components/main';

interface Props {
  locale?: string;
}

const styles = {
  main: css`
    color: green;
  `
}

const Index: FC<Props> = ({ locale = 'en-US' }) => {
  return (
    <Main
      locale={ locale }
      className={ styles.main }
    />
  )
}

export default Index;