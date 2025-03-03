import React from "react";

const mealPlans = {
  Monday: {
    breakfast: "Bread toast, boiled eggs, tea/milk",
    lunch: "Rice, dal, mixed vegetable curry, curd",
    snacks: "Biscuits & tea",
    dinner: "Chapati, sabzi, pickle",
  },
  Tuesday: {
    breakfast: "Idli with sambar & coconut chutney",
    lunch: "Rajma rice, salad, curd",
    snacks: "Banana chips & filter coffee",
    dinner: "Dosa with tomato chutney",
  },
  Wednesday: {
    breakfast: "Poha with peanuts, tea",
    lunch: "Vegetable biryani, raita, dal fry",
    snacks: "Samosa & tea",
    dinner: "Palak paneer, chapati, salad",
  },
  Thursday: {
    breakfast: "Oats with dry fruits & almond milk",
    lunch: "Chickpea curry, rice, curd",
    snacks: "Roasted peanuts & green tea",
    dinner: "Stuffed paratha with butter, dal makhani",
  },
  Friday: {
    breakfast: "Scrambled eggs, brown bread, banana, milk",
    lunch: "Grilled chicken, rice, dal, salad",
    snacks: "Peanut butter sandwich, protein shake",
    dinner: "Paneer curry, chapati, steamed vegetables",
  },
  Saturday: {
    breakfast: "Pancakes with honey, milk",
    lunch: "Pulao, chana masala, curd",
    snacks: "Corn chaat & tea",
    dinner: "Aloo gobi sabzi, roti, dal",
  },
  Sunday: {
    breakfast: "Upma with coconut chutney, tea",
    lunch: "Veg thali: Rice, sambar, sabzi, papad, curd",
    snacks: "Maggie noodles & coffee",
    dinner: "Matar paneer, paratha, salad",
  },
};

const MealPlan = () => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayMeals = mealPlans[today];

  return (
    <div className=" mt-20 mb-20 p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto text-center border border-gray-300 ">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">🍽️ Meal Plan for {today}</h2>
      
      <div className="grid grid-cols-2 gap-4 text-left text-gray-700">
        <div className="bg-gray-100 p-3 rounded-lg">
          <strong className="text-gray-900">🍞 Breakfast:</strong>
          <p>{todayMeals.breakfast}</p>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <strong className="text-gray-900">🍛 Lunch:</strong>
          <p>{todayMeals.lunch}</p>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <strong className="text-gray-900">🍪 Snacks:</strong>
          <p>{todayMeals.snacks}</p>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <strong className="text-gray-900">🥘 Dinner:</strong>
          <p>{todayMeals.dinner}</p>
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
