import { Project } from "../../../types/types";
import useProjectCollection from "../../../utils/useProjectCollection";
import folder from "../../../assets/icons/Folder_.svg";
import github from "../../../assets/icons/Github.svg";
import share from "../../../assets/icons/share.svg";
import ScrollReveal from "../../../utils/Reveal";

export default function ProjectList() {
  const projects: Project[] = useProjectCollection();

  return (
    <>
      {projects.map((project) => (
        <ScrollReveal key={project.id}>
          <div
            key={project.id}
            className="border-[rgb(126,225,102)] border-[5px] w-[300px] bg-[rgb(18,17,21)] rounded-md lg:h-[300px] md:h-[300px] relative transition-transform transform hover:scale-105"
          >
            <div className="icons p-3 flex justify-between ">
              <div>
                <img className="w-10" src={folder} alt="" />
              </div>
              <div className="flex gap-3">
                <a
                  href={project.GitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="GitHub" />
                </a>
                <a
                  href={project.SiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={share} alt="Share" />
                </a>
              </div>
            </div>
            <div className="info p-3">
              <h1 className=" -mt-3 mb-3 font-serif text-xl">
                {project.Title}
              </h1>
              <p className="text-sm font-sans text-justify">{project.Body}</p>
            </div>
            <div className="langs font-sans">
              <p className="text-center absolute bottom-0  left-1/2 transform -translate-x-1/2">
                ({project.Langs.join(", ")})
              </p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </>
  );
}
