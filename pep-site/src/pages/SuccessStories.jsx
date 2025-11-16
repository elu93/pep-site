import { Link } from "react-router-dom";

export default function SuccessStories() {
  return (
    <section>
      <h1>Success Stories</h1>
      <p>Explore examples of our work across web, design, e-commerce, and social media.</p>

      <ul>
        <li><Link to="/success-stories/ecommerce">E-Commerce Projects</Link></li>
        <li><Link to="/success-stories/graphic-design">Branding & Graphic Design</Link></li>
        <li><Link to="/success-stories/photography">Photography</Link></li>
        <li><Link to="/success-stories/social-media">Social Media</Link></li>
        <li><Link to="/success-stories/websites">Website Projects</Link></li>
      </ul>
    </section>
  );
}
