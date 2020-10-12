import React from 'react'
import { ProjectPreview } from './ProjectPreview'

export function ProjectList() {
    const projects = [
        { name: 'Tasker', description: 'Tasker is a platform that can be used to keep your tasks in order.', lineLink: 'https://tasker-app2020.herokuapp.com/#/', codeLink: 'https://github.com/ShaharSadof22/Tasker', imgUrl: 'https://res.cloudinary.com/cloudinary-img/image/upload/v1602324703/Shahar%20Sadof%20Dev%20-%20Portfolio/tasker_zfblzs.png' },

        { name: 'AppSus', description: 'AppSus is a demo-like version of GoogleNotes and Gmail.', lineLink: 'https://shaharsadof22.github.io/AppSus/#/', codeLink: 'https://github.com/ShaharSadof22/AppSus', imgUrl: 'https://res.cloudinary.com/cloudinary-img/image/upload/v1602325407/Shahar%20Sadof%20Dev%20-%20Portfolio/edho-pratama-T6fDN60bMWY-unsplash_xieob4.jpg' },

        { name: 'Mister Toy', description: 'The app Mister toy, build for shop owners, and helps them to manage their shop.', lineLink: 'https://mister-toy2020.herokuapp.com/#/', codeLink: 'https://github.com/ShaharSadof22/Mister-Toy', imgUrl: 'https://res.cloudinary.com/cloudinary-img/image/upload/v1602325734/Shahar%20Sadof%20Dev%20-%20Portfolio/mister-toy_tcqex1.png' },

        { name: 'Meme-Me', description: 'Meme-me It\'s a free online image maker that allows you to add custom resizable text to images.', lineLink: 'https://shaharsadof22.github.io/Meme-Me/', codeLink: 'https://github.com/ShaharSadof22/Meme-Me', imgUrl: 'https://res.cloudinary.com/cloudinary-img/image/upload/v1602327387/Shahar%20Sadof%20Dev%20-%20Portfolio/rhondak-native-florida-folk-artist-_Yc7OtfFn-0-unsplash_n1dr2g.jpg' },
        
        { name: 'Pig Game', description: 'Game that build by Vanilla Javascript HTML and CSS that follow the rules of the Pig game.', lineLink: 'https://shaharsadof22.github.io/Pig-game/', codeLink: 'https://github.com/ShaharSadof22/Pig-game', imgUrl: 'https://res.cloudinary.com/cloudinary-img/image/upload/v1602328800/Shahar%20Sadof%20Dev%20-%20Portfolio/pig_game_ovxgsu.png' },
    ]

    return (
        <div className="project-container">
            {projects.map(project => <ProjectPreview project={project} key={project.name}/>)}
        </div>
    )
}
