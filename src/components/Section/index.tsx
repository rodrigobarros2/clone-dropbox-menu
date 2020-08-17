import React from 'react';

import * as S from './styles';

interface Props {
	variant: 'blue' | 'beige' | 'white' | 'black';
	title: string;
	description: string;
}

const Section: React.FC<Props> = ({ variant, title, description }) => {
	const buttonVariant = Math.round(Math.random());

	function handleToggle() {
		if (window.toggleActiveMenu) window.toggleActiveMenu();
	}

	return (
		<S.Container className={variant}>
			<S.HeaderWrapper>
				<S.Header>
					<h1>
						<S.DropboxLogo />
						<span>Dropbox</span>
					</h1>

					<button onClick={handleToggle}>
						{buttonVariant === 0 ? 'Interagir' : 'Acessar'}
					</button>
				</S.Header>
			</S.HeaderWrapper>

			<S.Content>
				<h2>{title}</h2>
				<p>{description}</p>
			</S.Content>
		</S.Container>
	);
};

export default Section;
