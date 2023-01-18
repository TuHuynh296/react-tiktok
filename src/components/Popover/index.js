import Tippy from '@tippyjs/react/headless';
import styles from './Popover.module.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

function Popover({
    children,
    width,
    height }) {
    return (
        <div
            className={cx('wrapper')}
            style={{ width, height }}
            tabIndex="0">
            {children}
        </div>
    );
}

export default Popover;