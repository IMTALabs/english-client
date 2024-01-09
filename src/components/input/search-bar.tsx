interface SearchBarProps {
  searchText: string;
  styleClass: string;
  placeholderText: string;
  setSearchText: (val: any) => void;
}

function SearchBar({
  searchText,
  styleClass,
  placeholderText,
  setSearchText,
}: SearchBarProps) {
  const updateSearchInput = (value: any) => {
    setSearchText(value);
  };

  return (
    <div className={'inline-block ' + styleClass}>
      <div className="input-group relative flex flex-wrap items-stretch w-full ">
        <input
          type="search"
          value={searchText}
          placeholder={placeholderText || 'Search'}
          onChange={e => updateSearchInput(e.target.value)}
          className="input input-sm input-bordered  w-full max-w-xs rounded-full px-10"
        />
        <div className="absolute bottom-2 left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            className="opacity-35"
            viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
