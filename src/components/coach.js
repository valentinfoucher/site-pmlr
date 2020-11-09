import React from "react";
import Img from "gatsby-image";

const Header = ({ data }) => (
  <div className="coach section" id="Coach">
    <div className="container">
      <div className="coach-main row">
        <div className="left col-md-5 col-lg-4 mb-3">
          <Img
            className='avatar'
            fixed={data.photo.fluid}
            objectFit="cover"
            objectPosition="top center"
          />
        </div>
        <div className="left col-md-7 col-lg-8">
          <div className="coach-details">
            <span className="name">Entraineur</span>
            <h2 className="sub-position">
             Julien Pulvé
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.description.childMarkdownRemark.html
              }}
            />
            {/* <ul className="details">
              <li>
                <strong>Full Name</strong>
                <p>{data.name}</p>
              </li>
              <li>
                <strong>Location</strong>
                <p>{data.location}</p>
              </li>
              <li>
                <strong>Email</strong>
                <p>
                  <a href={`mailto:${data.gmail}`}>{data.gmail}</a>
                </p>
              </li>
            </ul>  */}
            {/* <div className="socials">
              <ul>
                <li>
                  <a
                    className="fab fa-facebook-f"
                    href={data.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-twitter"
                    href={data.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-instagram"
                    href={data.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-linkedin-in"
                    href={data.linkdin}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-github"
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
              </ul>
            </div>  */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
