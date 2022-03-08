import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
          <h4>Version 1.1.0</h4>
          <p style={{marginTop: "15px", marginBottom: "15px"}}>
            A little project developed with youtube tutorials, focused on routes and CRUD studying. <br/>
            The Home and the About page was made based on the youtube tutorial, but I wanted to impplement 
            some parameters on the routing structure and then I created the Edit page. <br />
            This app still having some prop drilling but it's something that I will change soon. I'm glad of my results 
            and I still growing like a web developer.
          </p>
          <Link to="/">Go Back</Link>
        </div>
    );
}
export default About;