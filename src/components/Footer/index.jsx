import etda_logo from '../../image/logo_etda_White.png';
import './Footer.css';

function Footer() {
	return (
		<footer className='footer colored'>
			<div className='component'>
				<img
					src={etda_logo}
					alt='White Electronic Transactions Developement Agency s Logo'
					className={'etda_logo_image'} />
				<span>Electronic Transactions Development Agency</span>
			</div>
		</footer>
	)
}

export default Footer;