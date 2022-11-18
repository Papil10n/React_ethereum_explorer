import s from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.content}>Papillon</div>
            </div>
        </footer>
    )
}

export default Footer;