"use client"

import dynamic from 'next/dynamic'; 

const UseAnimations = dynamic(() => import("react-useanimations"), { ssr: false }); 
import arrowDown from 'react-useanimations/lib/arrowDown'; 
import ExpandableCard from './ExpandableCard';

export default function Features() { 
  return (
    <section id="projects" className="pt-72"> 
      <div> 
        <div> 
          <div className="text-center text-lime-400"> 
            <span className="border border-lime-600 py-2 px-2 gap-2 bg-fill rounded-full align-middle uppercase inline-flex"> 
              <UseAnimations animation={arrowDown} size={20} strokeColor='lime'/>
              projects 
            </span> 
          </div> 
          <div className='py-32'> 
            <ExpandableCard/> 
          </div> 
        </div> 
      </div> 
    </section>
  ); 
}
