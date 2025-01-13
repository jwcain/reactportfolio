import './App.css'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard.tsx";
import {Biography, Experience, Project, Recipe} from "./Types.ts";
import JSONLoader from "./components/JSONLoader/JSONLoader.tsx";
import RecipeCard from "./components/RecipeCard/RecipeCard.tsx";
import ProjectCard from "./components/ProjectCard/ProjectCard.tsx";
import CopyButton from "./components/CopyButton/CopyButton.tsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.tsx";

function App() {
  return (
    <div className="col centered">
        <TabGroup className={'tab-group'}>
            <div className="">
                <JSONLoader<Biography> paths={['/content/experience/bio.json']} render={ (bio) =>
                    (<div className="bio col">
                        <h1 className={''}>{bio.name}</h1>
                        <div className={'bio-content'}>{bio.description} </div>
                        <CopyButton textToCopy={bio.email} />
                    </div>)
                }/>
                <div className="tab-holder centered">
                    <TabList className="tab-buttons">
                        <Tab className="tab">Experience</Tab>
                        <Tab className="tab">Projects</Tab>
                        <Tab className="tab">Recipes</Tab>
                        <Tab className="tab">Gallery</Tab>
                    </TabList>
                </div>
            </div>
            <TabPanels className="col centered">
                <TabPanel className="card-list">
                    <JSONLoader<Experience>
                    paths={[
                    '/content/experience/freelance2024.json',
                    '/content/experience/sonalysts.json',
                    '/content/experience/coneydog.json',
                    '/content/experience/huskygames.json',
                    ]}
                    render={(experience: Experience) => (<ExperienceCard experience={experience}/>)}
                    />
                </TabPanel>
                <TabPanel className="card-list">
                    <JSONLoader<Project>
                    paths={[
                    '/content/project/hexquisite.json',
                    '/content/project/geneticeuchre.json',
                    '/content/project/flaskportfolio.json',
                    '/content/project/affinityforquotes.json',
                    '/content/project/agent967.json',
                    '/content/project/astrocide.json',
                    '/content/project/thepathyouchose.json',
                    ]}
                    render={(project: Project) => (<ProjectCard project={project}/>)}
                    />
                </TabPanel>
                <TabPanel className="card-list">
                    <JSONLoader<Recipe>
                    paths={[
                    '/content/recipe/pbcookie.json',
                    '/content/recipe/cheesecake_base.json',
                    ]}
                    render={(recipe: Recipe) => (<RecipeCard recipe={recipe}/>)}
                    />
                </TabPanel>
                <TabPanel className="card-list">
                    <ImageGallery images={[
                        '/content/gallery/100.jpg',
                        '/content/gallery/200.jpg',
                        '/content/gallery/300.jpg',
                        '/content/gallery/400.jpg',
                        '/content/gallery/502.jpg',
                        '/content/gallery/402.jpg',
                        '/content/gallery/403.jpg',
                        '/content/gallery/500.jpg',
                        '/content/gallery/501.jpg',
                        '/content/gallery/505.jpg',
                        '/content/gallery/1002.jpg',
                        '/content/gallery/1003.jpg',
                        '/content/gallery/1004.jpg',
                        '/content/gallery/1005.jpg',
                    ]}/>
                </TabPanel>
            </TabPanels>
        </TabGroup>
        <button className={'to-top-button'} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img className={'icon'} src={'/up-double.svg'} alt={'To Top'}/>
        </button>
    </div>

  );
}

export default App