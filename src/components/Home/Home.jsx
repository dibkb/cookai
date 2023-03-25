import React from "react";
import { ArrowLong, Ellipse } from "../../utils/icons";
import { Button } from "../Utils";
import styles from "./home.module.css";
const Home = ({ executeScroll }) => {
  return (
    <main className="mt-16 px-4 lg:px-12 xl:px-24 2xl:px-64">
      <div className="max-w-screen-2xl mx-auto">
        <div className={styles["heading"]}>
          <h1 className="self-center w-full text-[2.7rem] sm:text[3rem]  md:text-[3.6rem] sm:max-w-2xl  md:max-w-3xl  text lg:text-[4.2rem] font-raleway font-semibold text-center lg:max-w-4xl mt-4">
            The only platform you’ll ever need to stay healthy and fit.
          </h1>
          <small className={styles.underline__1}></small>
          <small className={styles.underline__2}></small>
        </div>
        <section className="mt-8 text-center text-base text-cookTextLight leading-8 flex flex-col gap-4">
          <p>Hello there !</p>
          <p>
            I’m Harshit, leading Cook.AI, a startup which aims to revolutionize
            the way we, the humans consume food. We are bringing Artificial
            Intelligence and Digital technologies to personalize diets. With
            advancement of technology in almost every aspect of our life, it is
            now a need to modernize the very fundamental part of our life,
            eating!
          </p>
          <p>
            My friends, Diet is a very important part of our life, every
            molecules that goes into our body decides how the body is going to
            function. A healthy diet is the stepping stone for a beautiful life.
            We will ensure that our users form a habit of meal planning using
            our super simplified application, that lets you decide what you
            shall eat based on your personalized nutritional and taste
            requirements. With a database of 50,000 + Recipes from around the
            world, Create the perfect meal plan for the week automatically
            tracking every nutritional values that you want your body to
            consume. Every ingredients of the recipes in your meal plan will be
            delivered to your doorstep!
          </p>
          <p>Thank You</p>
        </section>
        <section className="flex flex-col mt-16">
          <div className="max-w-xs mx-auto w-[60%]">
            <Button text={"Know More"} onClickHandler={executeScroll} />
          </div>
          {/* donwn arrow */}
          <section
            className={styles["downArrow__container"]}
            onClick={executeScroll}
          >
            <ArrowLong className={styles["arrow"]} />
            <Ellipse className={styles["ellipse"]} />
          </section>
        </section>
      </div>
    </main>
  );
};

export default Home;
