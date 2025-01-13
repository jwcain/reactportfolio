import './ExperienceCard.css';
import {Experience} from '../../Types.ts';

type ExperienceCardProps = {
    experience: Experience
}

export default function ExperienceCard({experience}: ExperienceCardProps) {

    return (
        <div className="card col">
            <div className="row hr">
                <div className={'left'}>
                    <span className="title">{experience.title}</span>
                    <span className="employer italic-text">{experience.employer}</span>
                </div>
                <div className={'right'}>
                    <span className="date">{experience.date}</span><br/>
                    <span className="employer italic-text">{experience.location}</span>
                </div>

            </div>
            <span className={'description'}>{experience.description}</span>
            <div className="details">
                {experience.details.map((detail, index) => (
                    <div key={index}>
                        <span>♦ {detail}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}