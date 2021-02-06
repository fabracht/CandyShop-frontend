import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import NavButton from "../Components/MainNavButton";
import React from "react";

function Home() {
  return (
    <div>
      <NavButton />
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
