import react, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import BootstrapCarousel from './BootstrapCarousel'
import mainImage from '../assets/main-pic.png'

export default class Home extends Component {

    render() { return (
        <div className='home'>
           <BootstrapCarousel /> 
            <div className="about">
             <h1><strong>What is Cortadito?</strong></h1>
             <p className="resourcedescription">
            About 71% of Miami's population identifies as Latin American, but
            just what is a Latin American? What makes up a Latin American? Well,
            much like Miami's signature coffee, “el cortadito”, it varies.</p>
            <p className="resourcedescription">Sure,
            the ingredients may be similar, however, how they are expressed is
            what brings about the uniqueness of every Latin American
            individual. But how can we better prepare our residentes of Miami to
            integrate with the remaining 29% of its people? That's what
            Cortadito aims to do!</p>
            <p className="resourcedescription">Our App is meant to connect people from
            Latin-America to resources available in Miami as well as people in
            the community.
          </p>
          <Image className="w-50 p-3" src={mainImage} fluid />
            </div>
        </div>
    )}

}
