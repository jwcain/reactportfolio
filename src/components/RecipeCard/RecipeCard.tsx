import './RecipeCard.css';
import {Recipe} from "../../Types.ts";
import {Tab, TabGroup, TabList, TabPanels, TabPanel} from "@headlessui/react";

type RecipeCardProps = {
    recipe: Recipe;
}

export default function RecipeCard({recipe}:RecipeCardProps)
{
    return(
        <div className='card'>
            <TabGroup className={'col max'}>
                <span className={'title recipe-title centered hr'}>{recipe.title}</span>
                <div className='flex-row hr'>
                        <TabList className="recipe-buttons flex-col">
                            <Tab className={'tab small'}>Summary</Tab>
                            <Tab className={'tab small'}>Ingredients</Tab>
                            <Tab className={'tab small'}>Steps</Tab>
                        </TabList>
                    <div className='col max'>
                        <span className={'details'}>{recipe.description}</span>
                    </div>
                </div>
                <div className='col'>
                    <TabPanels>
                        <TabPanel></TabPanel>
                        <TabPanel className="tab-panel">
                            <div className={'col'}>
                                {recipe.steps.map((step, index) => (
                                    step.ingredient.length > 0 ?
                                        (<div key={index} className="col">
                                        {step.ingredient.map((ingredient, index2) => (
                                            <span key={index2}>♦ {ingredient.amount + " " + ingredient.name}</span>
                                        ))}
                                    </div>)
                                    : (<> </>)
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel className="tab-panel">
                            {recipe.steps.map((step, stepIndex) => (
                                <div key={stepIndex} className={'step col'}>
                                    <span>{step.description}</span>
                                    {step.ingredient.length > 0 ?
                                        (<div className="col">
                                            {step.ingredient.map((ingredient, ingredientIndex) => (
                                                <span key={ingredient.name + ingredientIndex}>♦ {ingredient.amount + " " + ingredient.name}</span>
                                            ))}
                                        </div>)
                                        : (<div key={stepIndex}></div>)
                                    }
                                    <span className={'step-label hr2'}></span>
                                </div>
                            ))}
                        </TabPanel>
                    </TabPanels>
                </div>
            </TabGroup>

        </div>);
}