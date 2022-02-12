import react, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import BootstrapCarousel from './BootstrapCarousel'

export default class Home extends Component {

    render() { return (
        <>
           <BootstrapCarousel /> 
            <div className="about">
             <h1>What is Cortadito?</h1>
             <p>
            About 71% of Miami’s population identifies as Latin American, but
            just what is a Latin American? What makes up a Latin American? Well,
            much like Miami’s signature coffee, “el cortadito”, it varies. Sure,
            the ingredients may be similar, however, how they are expressed is
            what brings about the uniqueness of every Latin American
            individual.But how can we better prepare our residentes of Miami to
            integrate with the remaining 29% of its people? That’s what
            Cortadito aims to do! Our App is meant to connect people from
            Latin-America to resources available in Miami as well as people in
            the community.
          </p>
        </div>
        </>
    )}

}
