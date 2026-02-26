function Portfolio() {

  const projects = [
    {
    id: 6,
    img: "https://pimwp.s3-accelerate.amazonaws.com/2022/08/netflix.jpg",
    title: "MOVIE STREAMING WEB APPLICATION (Netflix UI Clone) ",
    desc: "• Developed a fully responsive Netflix UI clone using HTML, CSS, Bootstrap, and React.",
    link: "https://react-net-flix.onrender.com/"
  },

  {
    id: 4,
    img: "https://assets.devfolio.co/hackathons/41e977b0b4084d85b8ae685a63495833/projects/7e08e9feb6ce4dd1afef43195be5bf5b/002db861-3f9b-432a-acf8-1057d72a5856.png",
    title: "Student Management System - Web Application",
    desc: "Developed a Flask-based web application with secure user authentication and full CRUD functionality.",
    link: "https://student-management-flask-x15g.onrender.com"
  },

  {
    id: 5,
    img: "https://sitechecker.pro/wp-content/uploads/2024/02/website-safety-checker.png",
    title: "URL Safety Checker",
    desc: "Built a web-based URL classification system using Python and Flask. ",
    link: "https://url-saftey-checker.onrender.com/"
  },
  {
    id: 1,
    img: "/images/Screenshot 2025-10-29 165912.png",
    title: "Machine Learning Based Anomaly Detection in Network Traffic",
    desc: "This study introduces a lightweight anomaly detection framework optimized for IoT environments with limited computational resources.",
    link: "/src/images/OUTPUT 2.mp4"
  },

  
  
 
  {
    id: 2,
    img: "/images/Screenshot 2025-10-21 152857.png",
    title: "Online Store",
    desc: "An eCommerce template using Bootstrap cards and a responsive product layout.",
    link: "https://royalbalaji319-cloud.github.io/realmestore/"
  },
  {
    id: 3,
    img: "https://www.shutterstock.com/image-vector/set-sign-forms-colorful-gradient-600nw-2082628327.jpg",
    title: "Login Page UI",
    desc: "A stylish login/signup interface designed with gradients and hover animations.",
    link: "https://royalbalaji319-cloud.github.io/ProjectFbLogin/"
  },
   {
    id: 5,
    img: "/images/Screenshot 2025-10-30 131336.png",
    title: "Heart Disease Detection Using Machine Learning",
    desc: "ML algorithms like Support Vector Machines (SVM), Decision Trees, and Logistic Regression are trained on datasets to identify patterns and predict a patient's likelihood of having heart disease.",
    link: "/src/pdffiles/HEART DISEASE DETECTION USING MACHINE LEARNING.pdf"
  },
  
  
];


  return (
    <div>
      
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="image">
          <img
            src="/images/ea303f19-6e62-48f5-9d71-26610859a69f.png"
            alt="profile"
            className="profile-img"
          />
        </div>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>

        <h1 className="hero-heading">
          Hello, I'm <span style={{ color: "#ffeb3b" }}>Balaji</span>
        </h1>

        <p><strong> <span style={{ color: "#fbfcfcff" }}>Python Full Stack Developer | Flask | React | SQL</span></strong></p>
        <a href="#projects" className="btn btn-custom mt-3">View My Work</a>
      </section>

      {/* About Section */}
      <section id="about">
  <h2> <strong>About Me</strong> </h2>
<p
  style={{
    lineHeight: "1.8",
    textAlign: "justify",
    fontSize: "18px",
  }}

>I’m <strong><span>Balaji Akula</span></strong>, a passionate{" "}
<strong><span>Python Full Stack Developer</span></strong>.{" "}
I have completed my graduation in{" "}
<strong><span>Electronics and Communication Engineering</span></strong>{" "}
from{" "}
<strong><span>Vel Tech Dr. RR & Dr. SR University</span></strong>.{" "}
I have successfully completed{" "}
<strong><span>Python Full Stack Web Development</span></strong>{" "}
training from{" "}
<strong><span>Besant Technologies</span></strong>.{" "}
I’m skilled in building scalable, responsive, and user-friendly web applications using{" "}
<strong><span>Python, Flask, HTML, CSS, JavaScript, React, and SQL</span></strong>.{" "}
My goal is to become a professional Python Full Stack Developer and create secure, modern, and high-performance web applications.
<br />
<a
  href="/public/pdffiles/Balaji-FullStack-Resume.pdf" target="self"
  download
  className="btn btn-custom mt-3"
  style={{
    display: "inline-block",
    marginTop: "15px",
    backgroundColor: "#fe8700",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
  }}
>
  Download My Resume
</a>
</p>


  
    
</section>


      {/* Skills Section */}
      <section id="skills">
        <h2><strong>My Skills</strong></h2>
        <div className="container">
          <div className="row justify-content-center">
            {["Python","Flask", "HTML5","CSS", "Bootstrap", "JavaScript", "React js","Mysql" ].map((skill, i) => (
              <div key={i} className="col-md-3 skill-card">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Projects Section (using .map) */}
      {/* ✅ Projects Section (Clickable Cards) */}
{/* ✅ Projects Section (Perfect Grid + Clickable Cards) */}
{/* ✅ Projects Section (2 Cards per Row + Clickable) */}
<section id="projects">
  <h1><strong>My Projects</strong></h1>
  <div className="container">
    <div className="row justify-content-center">
      {projects.map((project) => (
        <div key={project.id} className="col-md-5 d-flex justify-content-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card text-decoration-none"
          >
            <img src={project.img} alt={project.title} />
            <div className="project-content">
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>




{/*       Certificates sections*/}

{/* ✅ Certificates Section (Image Click Opens PDF) */}
<section id="Certificates">
  <h2><strong>My Certifications</strong></h2>
  <div className="container">
    <div className="row justify-content-center">
      {[
        {
          name: "MATLAB Programming Techniques",
          img: "https://miro.medium.com/1*E-4BOU1L3a8MEmbyyIrQSA.jpeg",
          pdf: "/pdffiles/CERTIFIATR B.pdf",
        },
        {
          name: "Basics of Python",
          img: "https://imgcdn.stablediffusionweb.com/2024/10/19/0aa146c4-0ff5-40fe-bc11-9ec0dfa5f24e.jpg",
          pdf: "/pdffiles/Basics of python.pdf",
        },
        {
          name: "Introduction to IoT",
          img: "https://static.vecteezy.com/system/resources/previews/023/754/401/non_2x/abstract-iot-internet-of-things-blue-background-image-circle-world-digital-network-concept-connected-to-the-internet-or-m2m-machine-to-machine-industrial-iot-commercial-iot-vector.jpg",
          pdf: "/pdffiles/Introduction To Internet Of Things (1) (1).pdf",
        },
        {
          name: "Introduction to Data Science",
          img: "https://marmore-assets-v2.s3.eu-west-1.amazonaws.com/insights/migrated/Data-Science-Marmore-Blog-Cover.jpg",
          pdf: "/pdffiles/Introduction_to_Data_Science_certificate.pdf",
        },
        {
          name: "Activate Galaxy Project Completion",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLlsyEc--PUWEm1UjEPQW8a7g7hUlUyzE4Q&s",
          pdf: "/public/pdffiles/AKULA BALAJI - certificate.pdf",
        },
        {
          name: "Python Fullstack Certificate",
          img: "https://www.webasha.com/uploads/course/images/65191ee47aed71696145124.Full_Stack_Python_Developer.jpg",
          pdf: "/pdffiles/AKULA BALAJI.pdf",
        },
      ].map((cert, i) => (
        <div key={i} className="col-md-3 d-flex justify-content-center">
          <div className="cert-card">
            {/* 🖼️ Image is clickable */}
            <a
              href={cert.pdf}
              target="_self"
              rel="noopener noreferrer"
            >
              <img src={cert.img} alt={cert.name} className="cert-img" />
            </a>
            <div className="cert-content">
              <h5>{cert.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
     {/* Contact Section */}
<section id="contact" style={{ textAlign: "center", padding: "40px" }}>
  <h2><strong>Contact Me</strong></h2>

  <form 
    action="https://formsubmit.co/royalsbalaji143@gmail.com" 
    method="POST"
    style={{ maxWidth: "400px", margin: "20px auto" }}
  >

    {/* Disable Captcha */}
    <input type="hidden" name="_captcha" value="false" />

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      style={{ width: "100%", padding: "10px", margin: "10px 0" }}
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      style={{ width: "100%", padding: "10px", margin: "10px 0" }}
    />

    <textarea
      rows="4"
      name="message"
      placeholder="Your Message"
      required
      style={{ width: "100%", padding: "10px", margin: "10px 0" }}
    ></textarea>

    <button
      type="submit"
      style={{
        padding: "10px 20px",
        backgroundColor: "#fe8700ff",
        border: "none",
        color: "white",
        borderRadius: "8px",
      }}
    >
      Send Message
    </button>
  </form>


  {/* Social Icons */}
  <div className="social-icons" style={{ marginTop: "25px", fontSize: "35px" }}>
    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ margin: "10px", color: "#1877f2" }}
    >
      <i className="fab fa-facebook"></i>
    </a>
    <a
      href="https://github.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ margin: "10px", color: "#000" }}
    >
      <i className="fab fa-github"></i>
    </a>
    <a
      href="https://in.linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ margin: "10px", color: "#0a66c2" }}
    >
      <i className="fab fa-linkedin"></i>
    </a>
    <a
      href="https://www.naukri.com/mnjuser/homepage"
      target="_blank"
      rel="noopener noreferrer"
      style={{ margin: "10px", color: "#ff6600" }}
    >
      <i className="fa-solid fa-briefcase"></i>
    </a>
    <a
      href="https://www.instagram.com/balaji_royal_7897/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ margin: "10px", color: "#e1306c" }}
    >
      <i className="fab fa-instagram"></i>
    </a>
  </div>
</section>


      {/* Footer */}
      <footer>@ Designed By Balaji Akula ❤️</footer>
    </div>
  );
}

export default Portfolio;
