import { FC } from 'react';
import { css, cx } from '@linaria/core';
import Skeleton from './skeleton';

interface Props {
  locale: string;
  className?: string;
}

const styles = {
  main: css`
    color: red;
  `
}

const Main: FC<Props> = ({ locale, className }) => {
  return (
    <Skeleton className={ cx(className, styles.main) }>Locale: { locale }</Skeleton>
  )
}

export default Main;