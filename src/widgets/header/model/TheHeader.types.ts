export interface TheHeaderProps {
  logos: {
    link: string;
    image: string;
  }[]
  nav: {
    link: string;
    text: string;
    isDropdown?: boolean;
    dropdownMenu?: {
      overTitle: string;
      link: string;
      text: string;
    }[]
  }[]
  cta: {
    link: string;
    text: string;
  }
}