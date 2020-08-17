import React from 'react';

interface Props {
	variant: 'blue' | 'beige' | 'white' | 'black';
	title: string;
	description: string;
}

const Section: React.FC<Props> = () => {
    return <div />;
}

export default Section;
