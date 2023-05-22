import React from 'react';
import { Text, Image } from '@chakra-ui/react';
import styled from 'styled-components';
import AboutImg from '../assets/images/about-us-img.png';

const AboutPageStyles = styled.div`
  padding: 8rem 0 8rem 0; 
  background-color: var(--ecruPrincess);
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
  }
  .left {
    flex: 4;
  }
  .right {
    flex: 4;
  }
  .about__subheading {
    margin-top: 2rem;
    font-size: 2rem;
    
    span {
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 5rem;
    
    color: var(--oliveCoat);
  }
  .about__info {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    .para {
      max-width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 2rem;
    }
    .about__heading {
      font-size: 3rem;
    }
  }
`;


export default function About() {
    return (
      <>
      <AboutPageStyles>
        <div className='container'>
          <div className='top-section'>
            <div className='left'>
              <p className='about__subheading'>
                Meet Jennifer, Julianne and Rebecca!
              </p>
              <h2 className="about__heading">About the Owners</h2>
              <div className="about__info">
                <Text fontSize='2xl'>
                During KU's full-stack coding bootcamp, we discovered a passion for literature and embarked on a daring adventure to open an online community for book lovers. Our journey serves as a testament to the transformative power of friendship, dedication, and the pursuit of dreams.
                </Text>
              </div>
            </div>
            <div className="right">
              <Image boxSize="lg" src={AboutImg} alt="about us img" />
            </div>
          </div>
        </div>
      </AboutPageStyles>
      </>
    );
  }
