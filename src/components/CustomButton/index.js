import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
//
import styles from './CustomButton.module.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CustomButton({
    children,
    to,
    type,
    color,
    width,
    height,
    href,
    targetBlank,
    loading,
    text,
    rounded,
    disabled,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps }) {

    let Comp = 'button';

    const props = {
        ...passProps
    }

    const classes = cx(
        'wrapper',
        // className,
        {
            [className]: !!className,
            text,
            disabled,
            rounded
        },
        type);

    // Remove event listeners when disabled
    if (!disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
        props.onClick = onClick
    }

    // Dynamic components
    switch (true) {
        case !!to:
            props.to = to;
            Comp = Link;
            console.log('>>> CustomButton');
            break;
        case !!href:
            props.href = href;
            props.target = targetBlank ? '_blank' : null;
            Comp = 'a';
            break;
        default:
            break;
    }

    useEffect(() => {

    }, [])

    return (
        <Comp
            className={classes}

            style={{
                color,
                width,
                height
            }}

            target={targetBlank ? 'blank' : null}

            {...props}
        >
           {leftIcon && <span className={cx('icon')}> {leftIcon} </span>}

            <div>
                {children}
            </div>

           {rightIcon && <span className={cx('icon')}> {rightIcon} </span>}


            {loading && (
                <div className={cx('loading')}>
                    <FontAwesomeIcon
                        className={cx('search-loading')}
                        leftIcon={faSpinner} />
                </div>
            )}
        </Comp>
    );
}

export default CustomButton;