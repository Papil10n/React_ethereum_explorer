import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <span>button toggle night mode</span>
                <div className={s.title}>Etherium explorer</div>
            </div>
        </header>
    )
}

export default Header;