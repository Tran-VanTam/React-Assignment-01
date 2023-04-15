import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import CityList from "../../Components/City/CityList";
import Types from "../../Components/HotelType/Types";
import Hotels from "../../Components/Hotel/Hotels";
import Form from "../../Components/Form/Form";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CityList />
      <Types />
      <Hotels />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
