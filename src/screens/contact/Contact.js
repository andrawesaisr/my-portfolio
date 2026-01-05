import "./contact.css";
import { navigationLinks } from "../../helpers/navigationLinks";
import { SocialIcon } from "react-social-icons";
import MagneticButton from "../../components/MagneticButton";

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <MagneticButton key={idx} strength={0.35} radius={60}>
      <p>
        <a href={e.ref}>{e.name}</a>
      </p>
    </MagneticButton>
  ));
}

function Contact() {
  return (
    <div className="contactMe__container" id="contact">
      <div className="contactMe__data__links">
        <div>
          <p>Cairo, Egypt</p>
          <p>Andrawes Aisr</p>
          <p>andrawesaisr@gmail.com</p>
          <div className="social_icons">
            <MagneticButton strength={0.5} radius={50}>
              <SocialIcon
                url="https://www.linkedin.com/in/andrewaisr/"
                target="_blank"
              />
            </MagneticButton>
            <MagneticButton strength={0.5} radius={50}>
              <SocialIcon
                url="https://github.com/Andrawesaisr?tab=repositories"
                bgColor="white"
                target="_blank"
              />
            </MagneticButton>
            <MagneticButton strength={0.5} radius={50}>
              <SocialIcon
                url="https://leetcode.com/andrewAisr/"
                bgColor="white"
                target="_blank"
              />
            </MagneticButton>
          </div>
        </div>
        <div>{createLinks()}</div>
      </div>
    </div>
  );
}

export default Contact;
