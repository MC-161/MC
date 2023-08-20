export type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void

export type TitleWithUnderlineProps = {
  title:string
  size:string
  width:string
}

export interface Project {
  Title: string;
  Body: string;
  Langs: string[];
  GitHubUrl: string;
  SiteUrl: string;
  id?: string;
}


export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export interface Props {
  children : JSX.Element;
}