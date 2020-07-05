import React, { MouseEvent } from 'react';

import { Backdrop, Model, ModelClose, ModelContent } from './with-model.styles';

interface OwnProps {
	backDropOnClick: (e: MouseEvent) => void;
	show: boolean;
}
type Props = OwnProps;

const WithModel: React.FC<Props> = ({ backDropOnClick, children, show }) => {
	return show ? (
		<div>
			<Backdrop onClick={backDropOnClick} />
			<Model>
				<ModelClose onClick={backDropOnClick} />
				<ModelContent>{children}</ModelContent>
			</Model>
		</div>
	) : null;
};

export default WithModel;
