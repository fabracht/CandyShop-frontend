import Header from "./Sections/Header";
// import About from "./About";
// import Features from "./Features";
// import Candies from "./Candies";
// import Stories from "./Stories";
// import Signup from "./Signup";
import Footer from "./Sections/Footer";
import NavButton from "../Components/MainNavButton";
import React from "react";

function Home() {
  return (
    <div>
      <NavButton />
      <main>
        <Header />
        {/* <About />
        <Features />
        <Candies />
        <Stories />
        <Signup /> */}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
