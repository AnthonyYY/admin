export interface Sidebar {
  name: string;
  routerLink?: Array<string>;
  icon?: string;
  children?: Sidebar[];
}
