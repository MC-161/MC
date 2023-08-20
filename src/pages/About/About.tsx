import TitleWithLongUnderline from "../../utils/TitleWithUnderline"
import LanguagesList from "./components/LanguagesList"

export default function About() {
  return (
    <div id="about" className="About flex flex-col items-center mt-20 font-serif text-white">
      <TitleWithLongUnderline width="w-[280%]" size="text-3xl" title="About" />
      <div className="abtInfo font-sans text-justify p-2 pt-4 text-xl">
      Currently studying a bachelors of science in Computer science with interests in Artificial Intelligence  and  Full stack Development. Currently studying a bachelors of science in Computer science with interests in Artificial Intelligence  and  Full stack Development.
      </div>
      <div className="mt-3">
        <TitleWithLongUnderline width="w-[5%]" size="text-lg" title="Frameworks & Technologies" />
        <LanguagesList />
      </div>
    </div>
  )
}
