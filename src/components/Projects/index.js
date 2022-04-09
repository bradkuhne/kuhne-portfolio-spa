import React, { useState } from 'react';

const Projects = () => {
    const [photos] = useState ([
        {
            name: 'Picture 1',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Picture 2',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Picture 3',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Picture 4',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Picture 5',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Picture 6',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
    ]);

    // const currentPhotos = photos.filter((photo) => photo)

    return (
        <div>
            <div className="flex-row">
                {photos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;