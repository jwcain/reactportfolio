import './App.css'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard.tsx";
import TextLoader from "./components/TextLoader/TextLoader.tsx";
import {Experience, Project, Recipe} from "./Types.ts";
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
                <div className="bio">
                    <h1 className={''}>Justin W Cain</h1>
                    <div className={'bio-content'}>
                        <TextLoader path={'/content/bio.txt'}/>
                    </div>
                    <CopyButton textToCopy={'contact@justinwcain.com'} />
                </div>
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
                        '/content/gallery/201.jpg',
                        '/content/gallery/300.jpg',
                        '/content/gallery/301.jpg',
                        '/content/gallery/400.jpg',
                        '/content/gallery/401.jpg',
                        '/content/gallery/402.jpg',
                        '/content/gallery/403.jpg',
                        '/content/gallery/404.jpg',
                        '/content/gallery/500.jpg',
                        '/content/gallery/501.jpg',
                        '/content/gallery/502.jpg',
                        '/content/gallery/504.jpg',
                        '/content/gallery/505.jpg',
                        '/content/gallery/1002.jpg',
                        '/content/gallery/1003.jpg',
                        '/content/gallery/1004.jpg',
                        '/content/gallery/1005.jpg',
                    ]}/>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>

  );
}

export default App