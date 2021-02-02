import React from 'react';
import Heading from '../../widgets/topography/heading';
import Title from '../../widgets/topography/title';
import SubTitle from '../../widgets/topography/subtitle';
import ServiceCard from '../services/service_card';
import './services.css';

const Services = (props)=>{
    return <div ClassName="service_container">
    <Title color="#2f4639">Statement of faith</Title>
    <br /><br />
    <div className="services">
      <ServiceCard
        title="Who are you"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
        logo="Logo"
      />
      <ServiceCard
        title="How are you?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
        logo="Logo"
      />
      <ServiceCard
        title="How are you?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
        logo="Logo"
      />
    </div>
  </div>
}

export default Services;