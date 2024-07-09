import React from 'react'
import "./skills.css"
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import imgSrcPn from "./images/Python-logo-notext.svg.png"
import imgSrcRt from "./images/React-icon.svg.png"
function Skills() {
  const PerSkill = ({ logo, title, article }) => {
    return (
      <div className='per_skill'>
        <div className="skill_logo">
          {logo}
        </div>
        <h3 className="skill_title">
          {title}
        </h3>
        <p className="skill_article">
          {article.split(' ').map((word, index) => (
            <span key={index} className={
              word === 'W3Schools.' || word === 'W3Schools' || word === 'CSS' || word === 'CSS,' || word === 'complex' || word === 'layouts,' || word === 'WEPRO' || word === 'responsive' || word === 'design' || word === 'animations' || word === "medias" || word === "HTML," || word === "HTML." || word === "design," || word === "JavaScript" || word === "JavaScript," || word === "variables," || word === "data" || word === "types," || word === "control" || word === "flow," || word === "functions," || word === "DOM" || word === "manipulation" || word === "YouTube" || word === "React" || word === "component-based" || word === "UIs" || word === "Python," || word === "Python" || word === "UIs" || word === "ES6+" ? 'emphasize' : ''
            }>
              {word}
            </span>
          ))}
        </p>
      </div >
    )
  }
  return (
    <div id='skilld_sec' className='skills_back'>

      <div className="skills_main">
        <h1 className="skills_title">Skills</h1>
        <h2 className="skills_desc">Below are some of my skills, and I am always ready to learn more</h2>
        <div className="skills_content">
          <PerSkill logo={<HtmlIcon style={{ transform: 'scale(5)' }} />} title="HyperText Markup Language" article="My web development journey began with a solid foundation in HTML, learned initially through W3Schools. WEPRO Learning Academy then helped me refine my skills, mastering advanced techniques and web standards to create robust, well-structured web pages." />
          <PerSkill logo={<CssIcon style={{ transform: 'scale(5)' }} />} title="Cascading Style Sheets" article="W3Schools ignited my passion for web development! I delved into CSS, learning to style web pages, after having a solid fundation in HTML. This hands-on learning fueled my desire to master the craft. WEPRO Learning Academy then took my skills to the next level, teaching me advanced techniques like complex layouts, responsive design, CSS animations and medias for building engaging web experiences." />
          <PerSkill logo={<JavascriptIcon style={{ transform: 'scale(5)' }} />} title="JavaScript / ES6+" article="WEPRO Learning Academy equipped me with the power of JavaScript, the language that brings web pages to life. since then I've been actively applying my knowledge in a variety of JavaScript projects. This hands-on experience has strengthened my understanding of variables, data types, control flow, functions, DOM manipulation and ES6+" />
          <PerSkill logo={<img src={imgSrcRt} />} title="React" article="After mastering JavaScript at WEPRO, I craved building dynamic web experiences. YouTube and W3Schools became my guides as I dove into React. React 's component-based approach makes building UIs a breeze, while its focus on efficiency keeps things smooth. Plus, the massive React community offers endless learning opportunities. React is my go-to for crafting engaging and interactive web applications." />
          <PerSkill logo={<img src={imgSrcPn} />} title="Python" article="Beyond JavaScript, my thirst for knowledge led me to explore Python, a versatile programming language. Again, WEPRO became my allies as I embarked on this self-directed learning journey. Though I haven't actively applied Python as extensively as JavaScript, I'm committed to ongoing learning and expanding my programming repertoire." />
        </div>
      </div>


    </div>
  )
}

export default Skills