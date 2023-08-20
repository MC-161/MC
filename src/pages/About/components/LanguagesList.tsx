import react from '../../../assets/langs/🦆 React_.svg';
import js from '../../../assets/langs/js.svg';
import ts from '../../../assets/langs/ts.svg';
import python from '../../../assets/langs/Python_.svg';
import html from '../../../assets/langs/HTML 5 Logo_.svg';
import css from '../../../assets/langs/css3.svg';

export default function LanguagesList() {
  const lang: Array<'js' | 'tsx' | 'react' | 'python' | 'html' | 'css'> = [
    'js',
    'tsx',
    'react',
    'python',
    'html',
    'css',
  ];

  const imgs: { [key: string]: string } = {
    js: js,
    tsx: ts,
    react: react,
    python: python,
    html: html,
    css: css,
  };

  return (
    <div className=" w-full grid md:grid-cols-2 grid-cols-3 gap-4 mt-4">
      {lang.map((langItem) => (
        <div className='border-1 border-white flex justify-center items-center rounded-md' key={Math.random() * 100}>
          <img className='p-3 w-20' src={imgs[langItem]} alt="" />
        </div>
      ))}
    </div>
  );
}
