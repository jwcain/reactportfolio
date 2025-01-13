import './ProjectCard.css';
import {Project} from "../../Types.ts";

type ProjectCardProps = {
    project: Project;
}

export default function ProjectCard({project}: ProjectCardProps) {
    return (
        <div className='card col'>
            <div className='row hr ri'>
                <span className={'title left'}>{project.title}</span>
                <div className={'right'}>
                    <div className={'tags row'}>
                        {project.tags.map((tag, index) => (

                            <div key={index} className='tag'>
                                <span>{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <span>{project.description}</span>

            <div className={'buttons row'}>
                {project.links.map(link => (
                    <button className={'small'} key={link.url} onClick={() => window.open(link.url, '_blank')}>
                        {link.name}
                    </button>

                ))}
            </div>
        </div>);
}