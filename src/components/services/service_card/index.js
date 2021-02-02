import React from 'react';
import Heading from '../../../widgets/topography/heading';
import SubTitle from '../../../widgets/topography/subtitle';
import './service_card.css';

const ServiceCard =(props)=>{
    return(
        <div className="service">
        <SubTitle> {props.logo} </SubTitle>
        <Heading>{ props.title }</Heading>
        <p>{ props.description}</p>
      </div>

    )
}
export default ServiceCard;