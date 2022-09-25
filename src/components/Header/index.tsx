import { ReactComponent as PersonLogo } from '../../assets/Person.svg';
import { ReactComponent as BookQuestionMark } from '../../assets/BookQuestionMark.svg';
import { ReactComponent as VideoClip } from '../../assets/VideoClip.svg';
import { ReactComponent as UserMenuChevron } from '../../assets/UserMenuChevron.svg';

import './styles.scss';

function Header({}) {
  return (
    <div className="container">
      <div className="header__title">
        <p className="title">Custom domains</p>
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
        <UserMenuChevron />
      </div>
    </div>
  );
}

export { Header };
