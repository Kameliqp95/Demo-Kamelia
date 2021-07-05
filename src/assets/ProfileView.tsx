import { makeStyles, createStyles, Theme, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar, TextField } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import { Delete } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function ProfileView() {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
            inputs: {
                width: '95%',
                margin: '10px',
            },
            margin: {
                margin: '10px',
            },
            avatar: {
                margin: 10,
            },
            bigAvatar: {
                margin: 10,
                width: 100,
                height: 100,
            },
            icon: {
                fontSize: 32,
            },
        }),
    );
    const theme = createMuiTheme({

    });
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    return (

        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={6} container direction="row"
                        justify="center"
                        alignItems="center">
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs >
                                <span className="font-size">{t("My Picture")}</span>
                                <Grid item xs={9} sm container direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <Grid item xs={6}>


                                        <Grid container justify="center" alignItems="center">
                                            <Avatar alt="Ivan Petkov" src="https://lh3.googleusercontent.com/proxy/ON_6Wl5OOBIgjpY16q34DIsPt43kJjJH04y6ballrv1SKUPIO4LYOdbdq4Aio5GRUEt27Nt1uHOH7SmTObg0iB70l6utsENdJHz5uk9w0dORwA" className={classes.bigAvatar} />
                                        </Grid>
                                        <NavLink className="actions" to='#'><Edit className={classes.icon} /></NavLink>
                                        <NavLink className="actions" to='#'><Delete className={classes.icon} /></NavLink>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} container
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs >
                                <span className="font-size">{t("Personal information")}</span>
                                <Grid item xs={9} sm container direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <Grid item xs={3}>


                                        <TextField

                                            label={t("First Name")}
                                            variant="outlined"
                                            id="mui-theme-provider-outlined-input"
                                            name='firstName'
                                            type="text"
                                            className={classes.margin}
                                        />

                                    </Grid>
                                    <Grid item xs={3}>

                                        <TextField

                                            label={t("Last Name")}
                                            variant="outlined"
                                            id="mui-theme-provider-outlined-input"
                                            name='lasttName'
                                            type="text"
                                            className={classes.margin}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} sm container direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <Grid item xs={6}>

                                        <TextField

                                            label={t("E-mail")}
                                            variant="outlined"
                                            id="mui-theme-provider-outlined-input margin"
                                            name='emailAddress'
                                            type="text"
                                            className={classes.inputs}
                                        />

                                    </Grid>
                                </Grid>
                                <Grid item xs={6} sm container direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <Grid item xs={3}>

                                        <TextField

                                            label={t("City")}
                                            variant="outlined"
                                            id="mui-theme-provider-outlined-input"
                                            name='city'
                                            type="text"
                                            className={classes.margin}
                                        />

                                    </Grid>
                                    <Grid item xs={3}>

                                        <TextField

                                            label={t("Address")}
                                            variant="outlined"
                                            id="mui-theme-provider-outlined-input"
                                            name='address'
                                            type="text"
                                            className={classes.margin}
                                        />

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

        </div>
    )
}

export default ProfileView
