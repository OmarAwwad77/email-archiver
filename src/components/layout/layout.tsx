import React from 'react';

import { Wrapper, Content } from './layout.styles';

const Layout: React.FC<{}> = ({ children }) => {
	return (
		<Wrapper>
			<Content>{children}</Content>
		</Wrapper>
	);
};

export default Layout;
