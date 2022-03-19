import utilStyles from '../styles/utils.module.css';
import { FaNodeJs } from "react-icons/fa";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiReact,
  SiExpress
} from "react-icons/si";


export default function TechStack() {
  return (
    <div className={utilStyles.hStack} style={{columnGap: '10px'}}>
      <SiPython style={{color: 'black', fontSize: '30px'}} />
      <SiJavascript style={{color: 'black', fontSize: '30px'}} />
      <SiTypescript style={{color: 'black', fontSize: '30px'}} />
      <SiMongodb style={{color: 'black', fontSize: '30px'}} />
      <SiReact style={{color: 'black', fontSize: '30px'}} />
      <FaNodeJs style={{color: 'black', fontSize: '30px'}} />
      <SiExpress style={{color: 'black', fontSize: '30px'}} />
    </div>
  );
}