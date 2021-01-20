import axios from "axios";

const getRandom = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    const data = response.data.meals;
    console.log(response);

    const parsedData = {
        strMeal: data.map((item) => item.strMeal),
        idMeal: data.map((item) => item.idMeal),
        strInstructions: data.map((item) => item.strInstructions),
        strMealThumb: data.map((item) => item.strMealThumb),
        strYoutube: data.map((item) => item.strYoutube),
    }
  
    return parsedData;
  } catch (error) {}
};

export default getRandom;
