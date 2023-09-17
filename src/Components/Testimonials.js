import React from 'react'
import "./Testimonials.css";
import { AiFillStar } from "react-icons/ai";
const Testimonials = () => {
  return (
		<div className="work-section-wrapper">
			<div className="work-section-top">
				<p className="primary-subheading">Testimonial</p>
				<h1 className="primary-heading">What They Are Saying</h1>
				<p className="primary-text">
					Client Stories: Real Experiences, Real Satisfaction, Real
					Success Stories. Hear from Those Who've Experienced Our
					Services Firsthand.
				</p>
			</div>
			<div className="testimonial-section-bottom">
				<img
					src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800"
					alt=""
				/>
				<p>
					I'm absolutely thrilled with the outstanding quality and
					excellent service I've experienced with Qebiser. The fresh,
					sustainable products and the team's commitment have exceeded
					my expectations. Qebiser is my top choice for healthy and
					delicious meals.
				</p>
				<div className="testimonials-stars-container">
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
				</div>
				<h2>Jane Rich</h2>
			</div>
		</div>
  );
}

export default Testimonials