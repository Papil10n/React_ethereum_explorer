import s from './Warning.module.css';
import downloadIco from './../../../image/downloadArrowIcon.png';

const Warning = (props) => {
    return (
        <div className={s.warning}>
            <div className={s.container}>
                <div className={s.title}>
                    You don't have the MetaMask extension installed
                </div>
                <div className={s.subtitle}>
                    To view the data of this application, install this extension:
                </div>
                <div className={s.imageWrap}>
                    <img className={s.img}
                         src="https://www.ledger.com/wp-content/uploads/2019/06/assets_logo_metamask.jpg"
                         alt="MetaMask" />
                </div>
                <div className={s.linkWrap}>
                    <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                       className={s.link} target='_blank'>
                        <span className={s.circle2}><img src={downloadIco} className={s.fa}></img></span>
                        <span className={s.title2}>Download</span>
                        <span className={s.titleHover2}>Click here</span></a>
                </div>
            </div>
        </div>
    )
}

export default Warning;