export interface SearchForm {
  search: string;
}

export interface SearchComponentProps {
  onSearch: (data: SearchForm) => void;
}
