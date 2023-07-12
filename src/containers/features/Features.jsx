import React from 'react'
import './features.css'
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Enhanced Security Measures',
    text: 'Implement advanced security protocols to ensure the protection of your valuable data and prevent unauthorized access.'
  },
  {
    title: 'Seamless Integration',
    text: 'Easily integrate our software with your existing systems and workflows, allowing for smooth and efficient processes.'
  },
  {
    title: 'Robust Analytics Dashboard',
    text: 'Gain valuable insights from comprehensive analytics, presented in an intuitive dashboard, to make data-driven decisions.'
  },
  {
    title: 'Improved Collaboration Tools',
    text: 'Facilitate teamwork and enhance productivity with powerful collaboration features, enabling seamless communication and file sharing.'
  }
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='#ftr'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>
        Request Early Access to Get Started
        </p>
      </div>
      <div className='gpt3__features-container'>
      {featuresData.map((item, index) => (
        <Feature 
        title={item.title}
        text={item.text}
        key={item.title + index}
        />

      ))}
      </div>
    </div>
  )
}

export default Features