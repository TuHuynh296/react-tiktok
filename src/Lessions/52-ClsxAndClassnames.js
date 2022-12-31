import styles from './52-ClsxAndClassnames.module.scss'
import clsx from 'clsx'

function ButtonCustom({ children, primary }) {
    return (
        <button
            className={
                clsx(
                    styles.buttonCustom,
                    {
                        [styles.primary]: primary
                    }
                )
            }>
            {children}
        </button>
    )
}

function ClsxAndClassnames() {
    return (
        <div style={{ padding: 32 }}>
            <ButtonCustom>Button 1</ButtonCustom>
            <ButtonCustom primary>Button 2</ButtonCustom>
        </div>
    )
}

export default ClsxAndClassnames;