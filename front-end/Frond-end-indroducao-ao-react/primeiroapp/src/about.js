import React from "react";

class AboutMe extends React.Component {
    
    render () {
        const eu = <h1>Guilherme</h1>
        const about = <p>Sou estudante de desenvolvimento Full-Stack na Trybe</p>
        const skills = <ul>
            <li>JS</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        return (
        <div>
        {eu}
        {about}
        <h2>Habilidades:</h2>
        {skills}
        </div>
        )
    }
}
export default AboutMe