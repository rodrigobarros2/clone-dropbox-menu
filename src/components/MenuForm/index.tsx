import React from 'react';

import * as S from './styles';

const MenuForm: React.FC = () => {
	function handleToggle() {
		if (window.toggleActiveMenu) window.toggleActiveMenu();
	}

	return (
		<S.Container>
			<S.Navigation>
				<h1>
					<S.DropboxLogo />
					<span>Dropbox</span>
				</h1>
				{/* ✕ chacter in video description */}
				<button className="action--close" onClick={handleToggle}>✕</button>
			</S.Navigation>

			<S.Form>
				<span className="title">Registre-se</span>
				<span className="subtitle">preencha o formulário abaixo</span>

				<input type="text" placeholder="Nome" />
				<input type="text" placeholder="Sobrenome" />
				<input type="email" placeholder="E-mail" />
				<input type="password" placeholder="Senha" />

				<button>Prosseguir</button>

				<span className="terms">
					Esta página está sujeita à Política de privacidade e aos Termos de
					serviço.
				</span>
			</S.Form>
		</S.Container>
	);
};

export default MenuForm;
