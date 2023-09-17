import React from 'react'
import "./Home.css";
import Navbar from './Navbar'
import BannerBg from "../Assets/banner-background.png"
import { FiArrowRight } from "react-icons/fi";
import HomeImg from "../Assets/home-image.png"


const Home = () => {
  return (
		<div className="home-container">
			<Navbar />
			<div className="home-banner-container">
				<div className="home-bannerImage-container">
					<img src={BannerBg} alt="" />
				</div>
				<div className="home-text-section">
					<h1 className="primary-heading">
						Your Favourite Food Delivered Hot & Fresh
					</h1>
					<p className="primary-text">
						Healthy switcher chefs do all the prep work, like
						peeding, chopping & marinating, so you can cook a fresh
						food.
					</p>
					<button className="secondary-button">
						Order Now <FiArrowRight />{" "}
					</button>
				</div>
				<div className="home-image-section">
					<img src={HomeImg} alt="" />
				</div>
			</div>
		</div>
  );
}

export default Home 