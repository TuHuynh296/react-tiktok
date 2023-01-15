import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { useEffect, useState } from 'react'
import axios from 'axios'

const cx = classNames.bind(styles)
// dùng bind giúp truy cập class với tên có chứa '-' vd như: cx('post-item')


function Header() {
    const [searchValue, setSearchValue] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const getAccountAndVideos = (value) => {
        setSearchValue(value);
        setIsSearching(true);

        setTimeout(() => {
            setIsSearching(false);
        }, 1000);
        // axios.get()
    }

    useEffect(() => {
    }, [])

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt="Tiktok" />
            <div className={cx('search-container')}>
                <div className={cx('search-input-wrapper')}>
                    <div className={cx('search-input')}>
                        <input
                            placeholder='Tìm kiếm tài khoản và video'
                            value={searchValue}
                            onChange={(e) => { getAccountAndVideos(e.target.value) }} />
                        {
                            <button
                                onClick={() => { setSearchValue('') }}
                                className={cx('search-close-wrapper')}>
                                {
                                    !!searchValue
                                    && !isSearching
                                    && <FontAwesomeIcon
                                        className={cx('search-close-button')}
                                        icon={faCircleXmark} />}
                                {
                                    isSearching
                                    && <FontAwesomeIcon
                                        className={cx('search-loading')}
                                        icon={faSpinner} />
                                }
                            </button>
                        }

                    </div>
                </div>
                <div className={cx('search-button')}>
                    <FontAwesomeIcon
                        className={cx({
                            'is-have-search-value': !!searchValue
                        })}
                        icon={faMagnifyingGlass} />
                </div>

            </div>
            <div className={cx('account-actions')}>
                <div className={cx('upload-file')}>
                    Upload
                </div>
                <div className={cx('send-video')}>
                    Send
                </div>
                <div className={cx('messages')}>
                    Messages
                </div>
                <div className={cx('profile')}>
                    Profile
                </div>
            </div>
        </div>
    </header>
}

export default Header;