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
    <div className="col">
        <TabGroup className={'tab-group'}>
            <div className="">
                <JSONLoader<Biography> paths={['/reactportfolio//content/experience/bio.json']} render={ (bio) =>
                    (<div className="bio">
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
                    '/reactportfolio//content/experience/freelance2024.json',
                    '/reactportfolio//content/experience/sonalysts.json',
                    '/reactportfolio//content/experience/coneydog.json',
                    '/reactportfolio//content/experience/huskygames.json',
                    ]}
                    render={(experience: Experience) => (<ExperienceCard experience={experience}/>)}
                    />
                </TabPanel>
                <TabPanel className="card-list">
                    <JSONLoader<Project>
                    paths={[
                    '/reactportfolio//content/project/hexquisite.json',
                    '/reactportfolio//content/project/geneticeuchre.json',
                    '/reactportfolio//content/project/flaskportfolio.json',
                    '/reactportfolio//content/project/affinityforquotes.json',
                    '/reactportfolio//content/project/agent967.json',
                    '/reactportfolio//content/project/astrocide.json',
                    '/reactportfolio//content/project/thepathyouchose.json',
                    ]}
                    render={(project: Project) => (<ProjectCard project={project}/>)}
                    />
                </TabPanel>
                <TabPanel className="card-list">
                    <JSONLoader<Recipe>
                    paths={[
                    '/reactportfolio//content/recipe/pbcookie.json',
                    '/reactportfolio//content/recipe/cheesecake_base.json',
                    ]}
                    render={(recipe: Recipe) => (<RecipeCard recipe={recipe}/>)}
                    />
                </TabPanel>
                <TabPanel className="card-list">
                    <ImageGallery images={[
                        '/reactportfolio//content/gallery/100.jpg',
                        '/reactportfolio//content/gallery/200.jpg',
                        '/reactportfolio//content/gallery/201.jpg',
                        '/reactportfolio//content/gallery/300.jpg',
                        '/reactportfolio//content/gallery/301.jpg',
                        '/reactportfolio//content/gallery/400.jpg',
                        '/reactportfolio//content/gallery/401.jpg',
                        '/reactportfolio//content/gallery/402.jpg',
                        '/reactportfolio//content/gallery/403.jpg',
                        '/reactportfolio//content/gallery/404.jpg',
                        '/reactportfolio//content/gallery/500.jpg',
                        '/reactportfolio//content/gallery/501.jpg',
                        '/reactportfolio//content/gallery/502.jpg',
                        '/reactportfolio//content/gallery/504.jpg',
                        '/reactportfolio//content/gallery/505.jpg',
                        '/reactportfolio//content/gallery/1002.jpg',
                        '/reactportfolio//content/gallery/1003.jpg',
                        '/reactportfolio//content/gallery/1004.jpg',
                        '/reactportfolio//content/gallery/1005.jpg',
                    ]}/>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>

  );
}

export default App