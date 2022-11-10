import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,weblink, githubLink }) => {

  const navToProject = () =>{
    console.log(`Navigate to selected project weblink::: ${weblink}`)
  }

  const navToGithub = () =>{
     console.log(`Navigate to selected project githubLINK:::: ${githubLink}`)
  }

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx"> 
        <img src={imgUrl}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div className='m-5 '>
          <button onClick={navToProject}className="border-2 border-solid rounded-md mr-3"><a className=" no-underline text-white" href={weblink} target="_blank"> Live Demo </a> </button>
          <button onClick={navToGithub} className="border-2 border-solid rounded-md"><a className=" no-underline text-white" href={githubLink} target="_blank"> Github </a> </button>
          </div>

          {/* <span>{description}</span> */}
          
        </div>
      </div>
    </Col>
  )
}
