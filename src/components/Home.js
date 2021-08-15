import { useState } from 'react'
import SkillsList from './SkillsList'

export default function Home() {
  const [skills, setSkills] = useState([
    { title: 'Photos of me as background', body: 'portfolio-pic link here', author: 'Emily', id: 1 },
    { title: 'Get to know me !', body: 'about-me link here', author: 'Emily', id: 2 },
    { title: 'My Skills', body: 'skills link here', author: 'Emily', id: 3 },
    { title: 'linkedin icon, Instagram icon, Articles icon', body: 'linkedin link here', author: 'Emily', id: 4 },
    // { title: 'Instagram icon', body: 'instagram link here', author: 'Emily', id: 5 },
    // { title: 'medium articles/ articles', body: 'articles link here', author: 'Emily', id: 6 },
    { title: 'Projects', body: 'projects link here', author: 'Emily', id: 5},
    { title: 'Footer', body: 'footer link here', author: 'Emily', id: 6 }
  ]);

  return (
    <div className="home">
      <SkillsList skills={skills}/>
    </div>
  )
}
