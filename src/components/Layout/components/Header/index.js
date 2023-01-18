import { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA, faCircleQuestion, faCircleXmark, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faMoon, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
//
import styles from './Header.module.scss'
import images from '~/assets/images'
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { CustomButton, Popover, StepMenu } from '~/components'

const cx = classNames.bind(styles)
// dùng bind giúp truy cập class với tên có chứa '-' vd như: cx('post-item')


const MENU_ACTIONS = [
    {
        icon: <FontAwesomeIcon icon={faA} />,
        title: 'Tiếng Việt',
        nextStep: {
            title: 'Ngôn ngữ',
            content: <div>
                Đây là content
            </div>,
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: 'feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
        extraAction: null,
    }
]

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
                visible={searchResultVisible}
                onClickOutside={() => { setSearchResultVisible(false) }}
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
                )}>
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
                    rounded>
                    Đăng nhập
                </CustomButton>

                <Tippy
                    interactive
                    delay={[0, 500]}
                    render={(attr) => (
                        <div
                            tabIndex="-1"
                            {...attr}>
                            <Popover width={223}>
                                <StepMenu items={MENU_ACTIONS} />
                            </Popover>
                        </div>
                    )}>
                    <div className={cx('more-action-icon')}>
                        <FontAwesomeIcon
                            icon={faEllipsisVertical} />
                    </div>
                </Tippy>
            </div>
        </div >
    </header >
}

export default Header;