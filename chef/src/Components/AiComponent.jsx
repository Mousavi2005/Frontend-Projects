import React, { useEffect, useState } from 'react';

const RecipeFinder = (props) => {

  const [recipeText, setRecipeText] = useState('');
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSearch = async () => {

    if (props.ingredients.length < 4 || !props.showRecipe) return;

    try {

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-r1-zero:free',
          messages: [
            {
              role: 'user',
              content: `I have the following ingredients: ${props.ingredients}. If it's necessary you can add afew more ingridients and provide a detailed recipe using them.`,
            },
          ],
        }),
      });

      const data = await response.json();
      setRecipeText(data.choices?.[0]?.message?.content || 'No recipe returned.');
    } catch (err) {

      console.error('Error fetching recipe:', err);
      setRecipeText('An error occurred while generating the recipe.');
    }
  };

  useEffect(() => {

    handleSearch();
  }, [props.ingredients, props.showRecipe]);

  return (
    <div className='bg-[#FFF9F3]'>
      {props.showRecipe && (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Generated Recipe:</h2>
          <pre className="bg-white p-4 rounded-md whitespace-pre-wrap">
            {recipeText || 'Loading...'}
          </pre>
        </div>
      )}
  </div>

  );
};

export default RecipeFinder;
