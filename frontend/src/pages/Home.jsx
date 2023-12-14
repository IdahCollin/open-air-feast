// import OpenAiAssistant from '../components/OpenAIAssistant'
import ChatbotApp from '../components/ChatbotApp';
import { PromptForm } from '../components/PromptForm';
import { NewRecipe } from '../components/newRecipe/NewRecipe';
import { CollectionRecipes } from "../components/collectionRecipes/CollectionRecipes"
import { recipeStore } from '../stores/recipeStore';

export const Home = () => {
  const { newRecipe } = recipeStore()
  return (
    <>
      {/* <OpenAiAssistant /> */}
       <ChatbotApp /> 
      <PromptForm />
      {newRecipe && <NewRecipe />} {/* Conditionally render NewRecipe only when newRecipe is truthy */}
      <CollectionRecipes />
    </>
  );
};

