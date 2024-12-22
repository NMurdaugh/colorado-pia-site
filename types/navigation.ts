export interface NavLink {
  label: string;
  to: string;
  icon?: string;
  children?: NavLink[];
}
