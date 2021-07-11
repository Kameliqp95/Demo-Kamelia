import React from 'react'
import { useFormik } from 'formik'
import { makeStyles, createStyles, Theme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar, ButtonGroup, IconButton, TextField, Tooltip } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import { Delete } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import useLocalStorage from 'use-local-storage';
import { NavLink } from 'react-router-dom';
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
    let fontValue = 18;
    const resize = (type: 'increase' | 'decrease') => {
        if (
            value &&
            ((type === 'increase'&& value) || (type === 'decrease' && value))
        ) {
            if(type === 'increase' && value < 25)
            {
                fontValue = value + 1;
            }
            else if(type === 'decrease' && value > 16)
            {
                fontValue = value - 1;
            }
            else
            {
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