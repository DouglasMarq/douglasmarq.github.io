import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { GITHUB_URL, LINKEDIN_URL, MAIL_TO_ULR } from "../../constants";
import Link from "next/link";

type FooterProps = {
  showName: boolean;
  year: number;
  position?: "absolute" | "sticky";
};

const Icons = [
  {
    name: "github",
    icon: faGithub,
    color: "grey",
    CTA: GITHUB_URL,
  },
  {
    name: "linkedin",
    icon: faLinkedin,
    color: "grey",
    CTA: LINKEDIN_URL,
  },
  {
    name: "mail",
    icon: faEnvelope,
    color: "grey",
    CTA: MAIL_TO_ULR,
  },
];

const Footer: React.FC<FooterProps> = ({ year, showName, position }) => {
  return (
    <div className={`${position} left-0 right-0 bottom-0`}>
      <div className="flex justify-center items-center gap-5 pb-1">
        {Icons.map((icon, index) => (
          <Link
            href={icon.CTA}
            key={index}
            target="_blank"
            className={`circle-button ${icon.name}`}
          >
            <FontAwesomeIcon
              icon={icon.icon}
              style={{ color: icon.color, width: "28px" }}
            />
          </Link>
        ))}
      </div>
      {showName ? (
        <div className="pb-5">
          <span className="text-customGray text-[10px]">
            &copy; 2021-{year} DOUGLAS MARQUES
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default Footer;
