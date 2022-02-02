import React, { useRef } from 'react'

function UseRefComponent() {
	const inputEl = useRef();
	const onButtonClick = () => {
		// `current` aponta para o evento de `focus` gerado pelo campo de texto
		inputEl.current.focus();
	};
	console.log(inputEl)
	return (
		<>
			<input ref={inputEl} type="text" />
			<button onClick={onButtonClick}>Focus no input</button>
		</>
	);
}

export default UseRefComponent