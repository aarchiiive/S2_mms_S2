import React from 'react';
import html2Canvas from 'html2Canvas';
import styled from 'styled-components';
import User from './UserList';

const Div = styled.div`
	margin : auto;
	padding : 30px;
	font-size : 600;
	background-color : #0006888;
	color : white;
`;

const saveimage = () => {	
	const onCapture = () => {
		console.log('onCapture');
		html2canvas(document.getElementById('div')).then(canvas=>{
			onSavaAs(canvas.toDataURL('mms/png'), 'mms1-download.png')
		});
	};
	
	const onSaveAs =(uri, filename)=> {
		console.log('onSaveAs');
		var link = document.createElement('a');
		document.body.appendChild(link);
		link.href = uri;
		link.download = filename;
		link.click();
		document.body.removeChild(link);
	};
	
	return (
		<>
			<Div id="div">
				Hello #006888!
				<div>
                    <h4>이름: {User.name}</h4>
                    <h4>전화번호: {User.phone}</h4>
                    <h4>주소: {User.addr}</h4>
                    <h4>SNS: {User.SNS}</h4>
                    <h4>직책: {User.position}</h4>
                    <h4>이메일: {User.email}</h4>
                    <h4>이름: {User.memo}</h4>
                </div>
                <div className="QR">
                    <div className="QR">
                        <img className="qrCode" alt="qr_01" src="img/qr_01.png" />
                    </div>
                </div>
            </Div>
			<button onClick={onHtmlToPng}>Download</button>
		</>
	);

};

export default saveimage;