import React from 'react';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<html
			lang="en"
			style={{
				backgroundImage: `url('/background.png')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				minHeight: '100vh',
				overflow: 'hidden',
			}}
		>
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
