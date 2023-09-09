export interface IPlaylistItem {
  id: number;
  track: string;
  author: string;
  album: string;
  time: string;
}

export interface BurgerProps {
  onClick: () => void;
}

export interface ButtonProps {
  title: string;
  type: string;
  onClick: any;
}

export interface DropdownFilterProps {
  type: string;
  setFilterClick: any;
  filterElements: Array<string>;
}
