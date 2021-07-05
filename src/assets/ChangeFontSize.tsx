import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useLocalStorage from 'use-local-storage';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


function ChangeFontSize() {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            size_buttons: {
                color: '#fff',
            }
        }),
    );



    const [value, setValue] = useLocalStorage('fontSize', 10);

    const resize = (type: 'increase' | 'decrease') => {
        if (
            value &&
            ((type === 'increase' && value) || (type === 'decrease' && value))
        ) {
            const fontValue = type === 'increase' ? value + 1 : value - 1;
            document.documentElement.style.fontSize = `${fontValue}px`;
            setValue(fontValue);
        }
    }

    const classes = useStyles();
    const { t, i18n } = useTranslation();
    return (
        <>
            <IconButton onClick={() => resize("decrease")} className={classes.size_buttons} aria-label="decrease" size="small">
                <ArrowDownwardIcon fontSize="inherit" />
            </IconButton>
            <IconButton onClick={() => resize("increase")} className={classes.size_buttons} aria-label="increase" size="small">
                <ArrowUpwardIcon fontSize="inherit" />
            </IconButton>
        </>
    )


}
export default ChangeFontSize