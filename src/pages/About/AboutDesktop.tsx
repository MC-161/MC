import LanguagesList from "./components/LanguagesList";
export default function AboutDesktop() {
  return (
    <div id="about" className="About h-30 mt-40 pl-5 flex flex-col items-center">
      <div className="w-[80%]">
        <div className="flex items-center text-white">
          <h1 className="title text-[50px] font-serif mr-4">About.</h1>
          <div className="line w-[95%] h-[1px] bg-white"></div>
        </div>
        <div className="info grid grid-cols-[70%_30%]">
          <div className="text-white text-2xl font-sans">
            <p className="text-justify pr-10 pt-4">
              Currently studying a bachelors of science in Computer science with
              interests in Artificial Intelligence and Full stack Development.
              Currently studying a bachelors of science in Computer science with
              interests in Artificial Intelligence and Full stack Development.
            </p>
            <p className="text-justify pr-10 pt-4">
              Currently studying a bachelors of science in Computer science with
              interests in Artificial Intelligence and Full stack
              Development.Currently studying a bachelors of science in Computer
              science with interests in Artificial Intelligence and Full stack
              Development.
            </p>
          </div>
          <div className="technologies">
            <LanguagesList />
          </div>
        </div>
      </div>
    </div>
  );
}
