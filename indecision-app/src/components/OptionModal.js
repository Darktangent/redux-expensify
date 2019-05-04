import React from 'react';
import Modal from 'react-modal';
export default function OptionModal(props) {
	return (
		<Modal
			isOpen={!!props.selectedOption}
			contentLabel='Selected Option'
			closeTimeoutMS={300}
			onRequestClose={props.clearSelectedOption}
			className='modal'>
			<h3 className='modal__title'>Selected Option</h3>
			{props.selectedOption && (
				<p className='modal__body'>{props.selectedOption}</p>
			)}
			<button className='button' onClick={props.clearSelectedOption}>
				Okay
			</button>
		</Modal>
	);
}
