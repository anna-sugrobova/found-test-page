import { ReactComponent as PersonLogo } from '../../assets/Person.svg';
import { ReactComponent as BookQuestionMark } from '../../assets/BookQuestionMark.svg';
import { ReactComponent as VideoClip } from '../../assets/VideoClip.svg';
import { ReactComponent as Chevron } from '../../assets/Chevron.svg';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <h1 className="title">Custom domains</h1>
      </div>
      <div className="header__info">
        <div className="video">
          <VideoClip />
          <span>Introduction video</span>
        </div>
        <div className="intro">
          <BookQuestionMark />
          <span>How to get started</span>
        </div>

        <div className="user">
          <PersonLogo />
          <div className="user__info">
            <p className="user__info-name">Sid Barrett</p>
            <p className="user__info-pro">Power your account</p>
          </div>
        </div>
        <div className="chevron">
          <Chevron />
        </div>
      </div>
    </div>
  );
}

export { Header };
