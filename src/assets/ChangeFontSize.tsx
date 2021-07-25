import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useLocalStorage from 'use-local-storage';

function ChangeFontSize() {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            size_buttons: {
                color: '#fff',
            }
        }),
    );


    const [value, setValue] = useLocalStorage('fontSize', 10);
    let fontValue = 18;
    const resize = (type: 'increase' | 'decrease') => {
        if (
            value &&
            ((type === 'increase' && value) || (type === 'decrease' && value))
        ) {
            if (type === 'increase' && value < 25) {
                fontValue = value + 1;
            }
            else if (type === 'decrease' && value > 16) {
                fontValue = value - 1;
            }
            else {
                fontValue = value;
            }
            document.documentElement.style.fontSize = `${fontValue}px`;
            setValue(fontValue);
        }
    }

    const classes = useStyles();
    const { t, i18n } = useTranslation();
    return (
        <>
            <IconButton onClick={() => resize("decrease")} className={classes.size_buttons} aria-label="decrease" size="small">
                A-
            </IconButton>
            <IconButton onClick={() => resize("increase")} className={classes.size_buttons} aria-label="increase" size="small">
                A+
            </IconButton>
        </>
    )


}
export default ChangeFontSize