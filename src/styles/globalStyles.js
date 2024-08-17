import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
		color: red;
	}

	button {
		cursor: pointer;
	}
`
export default globalStyle
