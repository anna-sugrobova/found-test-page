import './Search.scss';
import { KeyboardEvent, useState } from 'react';
import { ReactComponent as Chevron } from '../../assets/Chevron.svg';

function Search() {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const optionsList = ['Date', 'Name', 'Domain', 'Status', 'Created on'];

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index: number) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  const handleKeyDown = (index: number) => (e: KeyboardEvent) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (
    e: KeyboardEvent<HTMLButtonElement | HTMLUListElement>,
  ) => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedOption(
          selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1,
        );
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedOption(
          selectedOption === optionsList.length - 1 ? 0 : selectedOption + 1,
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="search">
      <div className="input">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={isOptionsOpen ? 'expanded' : ''}
          onClick={toggleOptions}
          onKeyDown={handleListKeyDown}
        >
          {optionsList[selectedOption]}
          <Chevron />
        </button>
        <ul
          className={`options ${isOptionsOpen ? 'show' : ''}`}
          role="listbox"
          aria-activedescendant={optionsList[selectedOption]}
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
        >
          {optionsList.map((option, index) => (
            <li
              id={option}
              role="option"
              aria-selected={selectedOption === index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              key={option}
              onClick={() => {
                setSelectedThenCloseDropdown(index);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
        <p className="divider">....</p>
        <input placeholder="Start typing to search and filter your custom domains" />
      </div>

      <button className="search">Search</button>
    </div>
  );
}

export { Search };
