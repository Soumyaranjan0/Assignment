import React from "react";

const Section_5 = () => {
  const blogs = [
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: "path-to-image1.jpg", // Replace with your image path
      link: "/read-more-1",
    },
    {
      title: "What are your safeguarding responsibilities and how can you manage them?",
      image: "path-to-image2.jpg", // Replace with your image path
      link: "/read-more-2",
    },
    {
      title: "Revamping the Membership Model with Triathlon Australia",
      image: "path-to-image3.jpg", // Replace with your image path
      link: "/read-more-3",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>Caring is the new marketing</h2>
        <p>
          The Nexcent blog is the best place to read about the latest membership insights,
          trends, and more. See who's joining the community, read about how our community
          are increasing their membership income and lots more.
        </p>
      </div>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <a href={blog.link} className="read-more">
                Readmore →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section_5;
