import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { CustomButton, Popover } from '~/components'

const cx = classNames.bind(styles)
// dùng bind giúp truy cập class với tên có chứa '-' vd như: cx('post-item')


function Header() {
    const [searchValue, setSearchValue] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [searchHints, setSearchHints] = useState([
        'toi di tim'
    ])

    const [searchAccounts, setSearchACcounts] = useState([
        {
            id: 1,
            name: 'leavin296',
            avatar: 'https://yt3.ggpht.com/yti/AJo0G0n42sLQsMl9huKRzBv8SifPFRTBqVOojAu1-nfp=s88-c-k-c0x00ffffff-no-rj-mo',
            description: 'I finding me'
        }
    ])


    // showSearchResult hideSearchResult search result
    const [searchResultVisible, setSearchResultVisible] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    const getAccountAndVideos = (value) => {
        setSearchValue(value);
        setIsSearching(true);
        setSearchResultVisible(true);

        const timeout = setTimeout(() => {
            setIsSearching(false);
        }, 1000);
        // axios.get()
        return () => {
            clearTimeout(timeout);
        }
    }

    useEffect(() => {
    }, [])

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt="Tiktok" />
            <Tippy
                interactive
                render={attrs => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}>
                        <Popover>
                            <div>
                                <div className={cx('search-hints-wrapper')}>
                                    {searchHints.map((hint) => (
                                        <div
                                            key={hint}
                                            className={cx('search-hint')}>
                                            <FontAwesomeIcon
                                                className={cx('hint-icon')}
                                                icon={faMagnifyingGlass} height={200} />
                                            {hint}
                                        </div>
                                    ))}
                                </div>
                                <div className={cx('accounts-title')}>
                                    Accounts
                                </div>
                                <div className={cx('list-account')}>
                                    {searchAccounts.map((account) => (
                                        <div
                                            key={account.id}
                                            className={cx('account')}>
                                            <div className={cx('avatar')}>
                                                <img src={account.avatar} alt="avatar" />
                                            </div>
                                            <div className={cx('info')}>
                                                <div className={cx('name')}>
                                                    {account.name}
                                                </div>
                                                <div className={cx('description')}>
                                                    {account.description}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Popover>
                    </div>
                )}
                visible={searchResultVisible}
                onClickOutside={() => { setSearchResultVisible(false) }}>
                <div className={cx('search-container')}>
                    <div className={cx('search-input-wrapper')}>
                        <div className={cx('search-input')}>
                            <input
                                placeholder='Tìm kiếm tài khoản và video'
                                value={searchValue}
                                onClick={() => { setSearchResultVisible(!!searchValue) }}
                                onChange={(e) => { getAccountAndVideos(e.target.value) }} />
                            {
                                <button
                                    onClick={() => { setSearchValue(''); setSearchResultVisible(false) }}
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
                    <div className={cx('search-button-wrapper')}>
                        <FontAwesomeIcon
                            className={cx({
                                'is-have-search-value': !!searchValue
                            })}
                            icon={faMagnifyingGlass} />
                    </div>
                </div>

            </Tippy>

            <div className={cx('account-actions')}>
                <CustomButton
                    type='outline-secondary'
                    to='login'
                    rounded>
                    <FontAwesomeIcon
                        icon={faPlus}
                        className={cx('icon-plus')}
                    />
                    <span>
                        Tải lên
                    </span>
                </CustomButton>

                <CustomButton
                    type='danger'
                    rounded
                    className={cx('custom-button', 'custom-2')}>
                    Đăng nhập
                </CustomButton>
            </div>
        </div >
    </header >
}

export default Header;