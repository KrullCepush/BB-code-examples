export interface TypeItemMenu {
  id: string | number;
  label?: string;
  disabled?: boolean;
  [propsName: string]: any;
}

export interface TMenuRowFetch {
  items: TypeItemMenu[];
  activeItem: string | number;
  onClickItemHandler: (row: TypeItemMenu) => void;
  isLoading?: boolean;
}
