import React from 'react'
import "./About.css";
import AboutImg from "../Assets/about-image.png"
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
		<div className="about-section-container">
			<div className="about-section-image-container">
				<img src={AboutImg} alt="" />
			</div>
			<div className="about-section-text-container">
				<p className="primary-subheading">About</p>
				<h1 className="primary-heading">
					Food Is An Important Part Of A Balanced Diet
				</h1>
				<p className="primary-text">
					Recognizing the pivotal role of food in maintaining a healthy lifestyle, we are passionate about contributing my
					expertise and dedication to promote nutrition and well-being in any role I undertake.
				</p>
				<p className="primary-text">
					As a committed advocate for culinary excellence and dietary awareness, we are eager to bring our skills and enthusiasm to a dynamic team dedicated to fostering healthier living.
				</p>
				<div className="about-buttons-container">
					<button className="secondary-button">Learn More</button>
					<button className="watch-video-button">
						<BsFillPlayCircleFill /> Watch Video
					</button>
				</div>
			</div>
		</div>
  );
};

export default About;

