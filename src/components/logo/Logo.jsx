import s from './Logo.module.css';

export function Logo({logo, title, subtitle}) {
    return (
        <>
            <div className={s.container}>
                <img className={s.img} src={logo} alt="logo of the site"/>
                <span className={s.title}>{title}</span>
            </div>
            <span className={s.subtitle}>{subtitle}</span>
        </>
    )
}