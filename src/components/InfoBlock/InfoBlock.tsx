import './styles.scss';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

function InfoBlock({ children }: Props) {
  return <div className="info">{children}</div>;
}

export { InfoBlock };
