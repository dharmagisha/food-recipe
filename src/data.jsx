import { images } from './assets/asset'
import Recipe from './recipe'
 

function RecipeList(){

const recipes = [
  {
    image: images.dal,
    first: "Dal Gravy",
    para: `To prepare a delicious Dal Gravy, start by washing 1 cup of toor dal or moong dal thoroughly and pressure cooking it with 2.5 cups of water, 1/4 tsp turmeric powder, and a few drops of oil for 3–4 whistles. Once cooked, mash the dal well and set aside. In a separate pan, heat 2 tbsp of ghee or oil, add 1 tsp mustard seeds, 1/2 tsp cumin seeds, and let them splutter. Add a pinch of hing (asafoetida), followed by 1 finely chopped onion, 2 green chilies (slit), and 1 tsp grated ginger. Sauté until onions turn golden. Now add 1 chopped tomato and cook till it softens. Add 1/2 tsp red chili powder, 1/2 tsp coriander powder, and salt to taste. Stir well. Add the mashed dal and mix everything together. Add water as needed to get your desired consistency. Simmer for 5–10 minutes on low flame, stirring occasionally. Finish with a handful of chopped coriander leaves and a squeeze of lemon juice. Serve hot with rice, roti, or jeera rice.`,
    ingredients: [
      "1 cup toor/moong dal", "1 onion", "1 tomato", "2 green chilies", 
      "1 tsp ginger", "1/4 tsp turmeric", "1/2 tsp chili powder", 
      "1/2 tsp coriander powder", "Salt", "Ghee or oil", 
      "Mustard seeds", "Cumin seeds", "Hing", "Coriander leaves", "Lemon"
    ],
    video: "https://www.youtube.com/embed/l6t2VjCoJwY"
  },
  {
    image: images.chicken,
    first: "Chicken Curry",
    para: `Start by marinating 500g of chicken pieces with 1/2 tsp turmeric, 1 tsp red chili powder, 1 tbsp ginger garlic paste, and salt. Let it sit for at least 30 minutes. In a deep pan, heat 3 tbsp oil and add 1 tsp fennel seeds, 1 cinnamon stick, 2 cloves, and 1 bay leaf. Add 2 finely chopped onions and sauté until golden brown. Add 1 chopped tomato and cook till soft. Add 1 tbsp ginger garlic paste and cook until raw smell disappears. Add 1 tsp coriander powder, 1/2 tsp garam masala, 1/2 tsp cumin powder, and salt as needed. Add the marinated chicken and mix well. Cover and cook for 10–15 minutes until the chicken releases its juices. Add 1/2 cup water, cover, and simmer on low heat until chicken is cooked completely. Finish with chopped coriander and serve hot with rice or roti.`,
    ingredients: [
      "500g chicken", "1/2 tsp turmeric", "1 tsp red chili powder", "1 tbsp ginger garlic paste",
      "1 tsp fennel seeds", "1 cinnamon stick", "2 cloves", "1 bay leaf", "2 onions", 
      "1 tomato", "1/2 tsp cumin powder", "1 tsp coriander powder", "Salt", "Oil", "Coriander leaves"
    ],
    video: "https://www.youtube.com/embed/PrA5t1jri8k"
  },
  {
    image: images.egg,
    first: "Egg Curry",
    para: `Boil 4 eggs, peel them, and slightly cut slits to absorb masala. In a pan, heat 2 tbsp oil and fry the eggs until slightly golden. Remove and set aside. In the same pan, add 1 chopped onion and cook till golden. Add 1 tsp ginger garlic paste, sauté, then add 1 chopped tomato. Cook until soft. Add 1/2 tsp turmeric, 1 tsp red chili powder, 1 tsp coriander powder, and salt. Add 1/2 cup water to make a gravy. Add the fried eggs into the curry and simmer for 5–10 minutes. Garnish with coriander and serve with chapati, rice, or dosa.`,
    ingredients: [
      "4 eggs", "1 onion", "1 tomato", "1 tsp ginger garlic paste", 
      "1/2 tsp turmeric", "1 tsp red chili powder", "1 tsp coriander powder", 
      "Salt", "Oil", "Coriander leaves"
    ],
    video: "https://www.youtube.com/embed/ocn0W-w_TlM"
  },
  {
    image: images.fish,
    first: "Fish Gravy",
    para: `Clean 500g fish and marinate with salt and turmeric. In a clay pot or kadai, heat 3 tbsp oil. Add 1/2 tsp mustard seeds, curry leaves, 1 sliced onion, and 2 slit green chilies. Sauté well. Add 2 chopped tomatoes and cook until soft. Add 1 tbsp tamarind paste, 1 tsp chili powder, 1/2 tsp coriander powder, and salt. Add 1.5 cups water and let it boil. Gently place fish pieces into the gravy and cook covered for 10–12 minutes on low flame. Finish with coriander. Serve hot with rice.`,
    ingredients: [
      "500g fish", "1/2 tsp mustard seeds", "1 onion", "2 tomatoes", 
      "2 green chilies", "1 tbsp tamarind paste", "1 tsp chili powder", 
      "1/2 tsp coriander powder", "Curry leaves", "Salt", "Oil", "Coriander"
    ],
    video: "https://www.youtube.com/embed/gC-Ctc1JIVU"
  },
  {
    image: images.rasam,
    first: "Rasam",
    para: `Soak a small lemon-sized tamarind in water and extract the juice. Crush 4 garlic cloves, 1 tsp cumin, and 1 tsp pepper. In a pot, add the tamarind water, 1 chopped tomato, crushed mix, salt, and 1/4 tsp turmeric. Bring to a boil and simmer for 10 minutes. In a separate pan, heat 1 tsp ghee, add mustard seeds, curry leaves, 1 dry red chili, and a pinch of hing. Pour the tempering over the rasam. Garnish with coriander and serve hot with rice.`,
    ingredients: [
      "Tamarind", "Tomato", "Garlic", "Cumin", "Pepper", 
      "Mustard seeds", "Dry red chili", "Curry leaves", 
      "Hing", "Ghee", "Salt", "Turmeric", "Coriander"
    ],
    video: "https://www.youtube.com/embed/-cGu_9NJFP0"
  },
  {
    image: images.sambar,
    first: "Sambar",
    para: `Cook 1/2 cup toor dal in a pressure cooker with water and turmeric until soft. Mash and keep aside. In a pan, heat oil, add mustard seeds, curry leaves, 1 chopped onion, and 1 chopped tomato. Add chopped vegetables like carrots, drumsticks, and beans. Cook for a few minutes. Add 2 cups water, salt, and cook till vegetables are tender. Now add mashed dal and 2 tbsp sambar powder. Boil everything together. In a small pan, heat ghee, add hing, mustard, fenugreek, and red chili. Temper into sambar. Garnish with coriander. Serve with rice or idli.`,
    ingredients: [
      "Toor dal", "Onion", "Tomato", "Mixed vegetables", "Sambar powder", 
      "Tamarind", "Mustard seeds", "Fenugreek", "Hing", 
      "Red chili", "Ghee", "Curry leaves", "Salt", "Turmeric", "Coriander"
    ],
    video: "https://www.youtube.com/embed/4DYkgP1LGIo"
  },
  {
    image: images.chicken,
    first: "Mutton Gravy",
    para: `Clean 500g mutton and pressure cook with salt, turmeric, and water for 5 whistles. In a kadai, heat 3 tbsp oil. Add 1 cinnamon, 2 cloves, 2 cardamom. Add 2 chopped onions and sauté till golden. Add 1 tbsp ginger garlic paste. Then add 2 chopped tomatoes and cook till soft. Add 1 tsp red chili powder, 1 tsp coriander powder, 1/2 tsp garam masala. Mix well and add the cooked mutton with some stock. Let it boil for 10 minutes. Garnish with coriander and serve hot.`,
    ingredients: [
      "500g mutton", "Onion", "Tomato", "Cinnamon", 
      "Cloves", "Cardamom", "Ginger garlic paste", 
      "Chili powder", "Coriander powder", "Garam masala", 
      "Salt", "Turmeric", "Oil", "Coriander"
    ],
    video: "https://www.youtube.com/embed/ohsnkRnHJ3I"
  },
  {
    image: images.pongal,
    first: "Pongal",
    para: `Roast 1/2 cup moong dal until golden. Wash 1/2 cup rice and add both to a cooker with 4 cups water, salt, and 1/4 tsp turmeric. Cook for 4 whistles. In a small pan, heat 2 tbsp ghee, fry 1 tsp pepper, 1 tsp cumin, 1 inch grated ginger, 8 cashews, and curry leaves. Add this to the pongal and mix well. Serve hot with coconut chutney or sambar.`,
    ingredients: [
      "1/2 cup rice", "1/2 cup moong dal", "Ghee", 
      "Pepper", "Cumin", "Ginger", "Cashew", 
      "Curry leaves", "Salt", "Turmeric"
    ],
    video: "https://www.youtube.com/embed/2U-vGTr1jL8"
  },
  {
    image: images.mango,
    first: "Mango Pickle",
    para: `Wash and chop raw mangoes into cubes. Pat dry. In a bowl, mix 1 cup mango pieces, 2 tbsp red chili powder, 1 tbsp mustard seeds powder, 1/4 tsp turmeric, and salt. Heat 1/4 cup gingelly oil, splutter 1 tsp mustard seeds, add a pinch of hing and 1/2 tsp fenugreek powder. Let it cool and mix into the mangoes. Store in a dry, airtight jar for a day before using.`,
    ingredients: [
      "Raw mango", "Red chili powder", "Mustard powder", 
      "Turmeric", "Salt", "Gingelly oil", 
      "Mustard seeds", "Fenugreek powder", "Hing"
    ],
    video: "https://www.youtube.com/embed/lfbcmbQHqDo"
  }
];


return(
    <div className='container'>
      <h2 className='d-flex justify-content-center  mt-4'>COOKING IS THE LANGUAGE OF LOVE</h2>
      <div className="row px-3 py-5">
  {recipes.map((item, index) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center" key={index}>

            <Recipe 
              image={item.image} 
              first={item.first} 
              para={item.para} 
              ingredients={item.ingredients}
              video={item.video}
            />
          </div>
        ))}
      </div>
    </div>
)



}
export default RecipeList
