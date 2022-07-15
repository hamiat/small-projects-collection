import style from "./projects.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Project({ title, url, iconText, color }) {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className={style.projectWrapper} style={{ borderColor: color }}>
          <h2>{title}</h2>
          <span style={{ color: color }}>
            <FontAwesomeIcon icon={iconText} />
          </span>
        </div>
      </a>
    </>
  );
}
