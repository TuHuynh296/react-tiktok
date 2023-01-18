import classNames from 'classnames/bind'

import styles from './StepMenu.module.scss'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { CustomButton } from '~/components';

const cx = classNames.bind(styles);

function StepMenu({ items }) {

    const [nextStep, setNextStep] = useState(null);

    useEffect(() => {
        return () => {
            setNextStep(false);
        }
    }, [])

    return (
        <>
            {!nextStep &&
                <div className={cx('list-item')}>
                    {items.map((item) => (
                        <div
                            className={cx('item')}
                            key={item.title}
                            onClick={() => setNextStep(item.nextStep)}>
                            <div className={cx('icon')}>
                                {item.icon}
                            </div>
                            <CustomButton
                                text
                                to={item.to}>
                                {item.title}
                            </CustomButton>

                            {!!item.extraAction &&
                                <div>{item.extraAction}</div>
                            }
                        </div>
                    ))}
                </div>
            }

            {
                !!nextStep && nextStep.title && nextStep.content && (
                    <>
                        <div className={cx('next-step-header')}>
                            <FontAwesomeIcon
                                className={cx('back-icon')}
                                icon={faChevronLeft}
                                onClick={() => setNextStep(null)}
                            />
                            <div className={cx('next-step-title')}>
                                {nextStep.title}
                            </div>
                        </div>
                        <div>
                            {nextStep.content}
                        </div>
                    </>
                )
            }
        </>
    );
}

export default StepMenu;