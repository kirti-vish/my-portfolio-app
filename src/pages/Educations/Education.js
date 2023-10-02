import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'
import {MdSchool} from 'react-icons/md'
import {BiSolidSchool} from 'react-icons/bi'

const Education = () => {
  return (
    <>
        <div className='education' id='education'>
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'> Education Details</h2>
            <hr/>
       
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2021 - 2025"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Btech</h3>
    <h4 className="vertical-timeline-element-subtitle">MNIT Jaipur, IN</h4>
    <p>
      Chemical engineering <br/>CGPA-9.47
    </p>
    
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2021"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<BiSolidSchool />}
  >
    <h3 className="vertical-timeline-element-title">Intermediate/+2</h3>
    <h4 className="vertical-timeline-element-subtitle">CBSE</h4>
    <p>
      Delhi Public School <br/>96.6%
    </p>
    
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2019"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<BiSolidSchool />}
  >
    <h3 className="vertical-timeline-element-title">Matriculation</h3>
    <h4 className="vertical-timeline-element-subtitle">CBSE</h4>
    <p>
      Delhi Public School <br/>97%
    </p>
    
  </VerticalTimelineElement>
        </VerticalTimeline>
        </div>   
    </>
  )
}

export default Education