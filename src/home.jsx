import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { images } from './assets/asset';
import './home.css';

const Home = () => {
  const dishes = [
    {
      title: 'Gulab Jamun',
      video: images.swt,
      description: `Mix khoya (or milk powder), maida, and a pinch of baking soda into a soft dough. Shape into small balls and deep fry on low heat until golden brown. Prepare sugar syrup with water, sugar, cardamom, and a few saffron strands. Soak the fried balls in warm syrup for at least 30 minutes and serve!`
    },
    {
      title: 'Rava Dosa',
      video: images.brk,
      description: `To make Rava Dosa, mix 1 cup rava (semolina), ¼ cup rice flour, 2 tbsp maida, chopped onions, green chilies, cumin seeds, and salt. Add 2½ to 3 cups of water to make a thin, runny batter and let it rest for 15 minutes. Heat a tawa and pour the batter from a height, starting from the edges inward — no need to spread. Drizzle oil around the edges and cook until crisp and golden. Serve hot with coconut chutney or sambar.`
    },
    // {
    //   title: 'Garlic Rasam',
    //   video: images.swt,
    //   description: `Crush 6–8 garlic cloves and boil them in 2 cups of water with 1 chopped tomato, 1 tsp tamarind paste, salt, turmeric, and a little rasam powder. Simmer for 10–15 minutes. In a small pan, heat ghee or oil, add mustard seeds, curry leaves, and dried red chilies, then pour this tempering into the rasam. Garnish with coriander leaves and serve hot.`
    // },
    // {
    //   title: 'Ghee Rice',
    //   video: images.brk,
    //   description: `Heat 2 tbsp ghee in a pan, then add whole spices like cinnamon, cloves, bay leaf, and cardamom. Add 1 sliced onion and sauté until golden. Stir in 1 cup basmati rice and sauté for a minute. Add 2 cups of water and salt, cover, and cook on low heat until done. Garnish with fried cashews.`
    // },
    // {
    //   title: 'Onion Tomato Chutney',
    //   video: images.swt,
    //   description: `Sauté 1 chopped onion until soft, add 2 chopped tomatoes, 2–3 dried red chilies, and cook until mushy. Add tamarind and salt. Cool slightly, then blend to chutney. Temper with mustard seeds, curry leaves, and hing.`
    // },
    // {
    //   title: 'Aloo Paratha',
    //   video: images.brk,
    //   description: `Mash boiled potatoes, mix with onions, green chilies, coriander, salt, cumin, and garam masala. Make dough with wheat flour. Stuff, roll, and cook on tawa with ghee. Serve with curd, pickle, or butter.`
    // },
    // {
    //   title: 'Lemon Rice',
    //   video: images.swt,
    //   description: `Heat oil, add mustard seeds, urad dal, chana dal, dried red chilies, green chilies, curry leaves, and turmeric. Add cooked rice, salt, mix, then add lemon juice. Garnish with coriander or peanuts.`
    // },
    // {
    //   title: 'Masala Omelette',
    //   video: images.brk,
    //   description: `Whisk eggs with salt, turmeric, and pepper. Add chopped onions, chilies, tomatoes, coriander, and ginger. Cook on pan, flip, and serve hot with toast or as filling.`
    // },
        {
      title: 'Kesari',
      video: images.kerasi,
      description: `To make Kesari, heat 2 tablespoons of ghee in a pan and roast ½ cup of rava (semolina) on low flame until aromatic. In another pan, boil 1½ cups of water with a pinch of orange food color or saffron. Slowly pour the hot water into the roasted rava, stirring continuously to avoid lumps. Cook until the water is absorbed. Then add ½ cup of sugar and stir well. Cook until the mixture thickens and ghee starts to leave the sides. Add cardamom powder, roasted cashews, and raisins. Serve warm for a quick and tasty dessert!`
    },

    {
      title: 'Garlic Bread',
      video: images.garlic,
      description: `To make garlic bread, mix softened butter with minced garlic, chopped coriander or parsley, a pinch of salt, and optional chili flakes. Spread this on sliced bread or baguette. Toast in a preheated oven at 180°C for 8–10 minutes, or on a pan for 3–5 minutes on low heat. For a cheesy twist, add grated cheese before toasting. Serve hot with pasta, soup, or enjoy as a snack!`
    },
    {
      title: 'Bread Desert',
      video: images.Bread,
      description: `To make a delicious bread dessert, cut 4–5 slices of bread into small cubes and lightly toast or fry them in ghee until golden. In a separate pan, heat 1 cup of milk, add 3–4 tablespoons of sugar, a pinch of cardamom powder, and let it simmer until slightly thick. Pour the warm milk over the toasted bread pieces and let them soak. Garnish with chopped nuts like almonds, cashews, and a few raisins. Serve warm or chilled — it tastes like a quick version of Shahi Tukda or bread pudding!`
    },
 

  ];

  return (
    <div style={{ backgroundColor: '#fff7ec', paddingBottom: '50px' }}>
      <Carousel>
        <Carousel.Item>
          <img src={images.cru1} width="100%" style={{ height: '100vh', maxHeight: '700px', objectFit: 'cover' }} alt='' />
          <Carousel.Caption>
            <p>Spice up your meals with easy, step-by-step Indian recipes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={images.cru3} width="100%" style={{ height: '100vh', maxHeight: '700px', objectFit: 'cover' }} alt='' />
          <Carousel.Caption>
            <p>Explore rich flavors, regional dishes, and timeless recipes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={images.cru4} width="100%" style={{ height: '100vh', maxHeight: '700px', objectFit: 'cover' }} alt='' />
          <Carousel.Caption>
            <p>Uncover the soul of Indian cuisine, one recipe at a time.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 style={{ textAlign: 'center', margin: '50px 0', fontWeight: 'bold', color: '#aa5500' }}>Start with These Easy & Tasty Indian Dishes!</h2>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="dish-container"
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              marginBottom: '40px'
            }}
          >
            <div style={{ flex: '1 1 260px', display: 'flex', justifyContent: 'center' }}>
              <video
                width='100%'
                height='auto'
                style={{
                  maxWidth: '260px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
                loop
                autoPlay
                muted
              >
                <source src={dish.video} />
              </video>
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>{dish.title}</h3>
              <p style={{ lineHeight: '1.6', color: '#444', fontSize: '15px' }}>{dish.description}</p>
              {/* <button style={{
                marginTop: '10px',
                background: '#ffaa33',
                border: 'none',
                padding: '6px 16px',
                borderRadius: '5px',
                cursor: 'pointer',
                color: '#fff'
              }}>Recipe</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
