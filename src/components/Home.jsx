import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex mt-4">
        <h1 className="mx-auto font-raleway text-heading font-semibold text-center select-none max-w-4xl">
          The only platform you’ll ever need to stay healthy and fit.
        </h1>
      </div>
      <section className="mt-8 text-center text-base text-cookTextLight leading-8 flex flex-col gap-4">
        <p>Hello there !</p>
        <p>
          I’m Harshit , leading Cook.AI , a startup which aims to revolutionize
          the way we , the humans consume food. We are bringing Artificial
          Intelligence and Digital technologies to personalize diets. With
          advancement of technology in almost every aspect of our life , it is
          now a need to modernize the very fundamental part of our life ,
          eating!
        </p>
        <p>
          My friends , Diet is a very important part of our life , every
          molecules that goes into our body decides how the body is going to
          function. A healthy diet is the stepping stone for a beautiful life.
          All of us have different nutritional requirements , so thus different
          taste requirements. We want to assure , that our users form a habit of
          meal planning using our super simplified application, that lets you
          decide what you eat based on your personalized body requirements. With
          a database of 50,000 + Recipes from around the world , create the
          perfect meal plan for the week tracking every nutritional values that
          you want your body to consume. We will make sure that every
          ingredients of the recipes you’ve in you meal plan is delivered to
          you.
        </p>
        <p>Thank You</p>
      </section>
      <section className="flex flex-col">
        <button className="mt-12 border mx-auto bg-cookLime px-16 py-3 rounded-lg border-cookGreen hover:bg-cookDarkGreen hover:text-white">
          Join Now
        </button>
      </section>
    </>
  );
};

export default Home;
