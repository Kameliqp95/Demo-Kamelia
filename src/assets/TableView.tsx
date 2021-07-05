import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Edit from '@material-ui/icons/Edit';
import { Delete, Link } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { preventDefault } from 'ol/events/Event';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
});

function createData(firstname: string, lastname: string, email: string, comment: string, nickname: string, action: any,) {
  return { firstname, lastname, email, comment, nickname, action };
}

const rows = [
  createData('Kamelia', 'Pavlova', 'kamelip@abv.bg', 'comment', 'nickname',
    <>
      <NavLink className="actions" to='#'><Edit /></NavLink>
      <NavLink className="actions" to='#'><Delete /></NavLink>
      <NavLink className="actions" to='#'><RoomIcon /></NavLink>
    </>
  ),
  createData('Evgeni', 'Ivanov', 'eivanov@abv.bg', 'comment1', 'nickname1',
    <>
      <NavLink className="actions" to='#'><Edit /></NavLink>
      <NavLink className="actions" to='#'><Delete /></NavLink>
      <NavLink className="actions" to='#'><RoomIcon /></NavLink>
    </>),
  createData('Georgi', 'Georgiev', 'ggeorgiev@gmail.com', 'comment2', 'nickname2',
    <>
      <NavLink className="actions" to='#'><Edit /></NavLink>
      <NavLink className="actions" to='#'><Delete /></NavLink>
      <NavLink className="actions" to='#'><RoomIcon /></NavLink>
    </>),
  createData('Teodor', 'Todorov', 'ttodorov@gmail.com', 'comment3', 'nickname3',
    <>
      <NavLink className="actions" to='#'><Edit /></NavLink>
      <NavLink className="actions" to='#'><Delete /></NavLink>
      <NavLink className="actions" to='#'><RoomIcon /></NavLink>
    </>),
  createData('Maria', 'Georgieva', 'mgeorgieva.abv.bg', 'comment4', 'nickname4',
    <>
      <NavLink className="actions" to='#'><Edit /></NavLink>
      <NavLink className="actions" to='#'><Delete /></NavLink>
      <NavLink className="actions" to='#'><RoomIcon /></NavLink>
    </>),
];

export default function TableView() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t("First Name1")}</TableCell>
            <TableCell align="right">{t("Last Name1")}</TableCell>
            <TableCell align="right">{t("E-mail1")}</TableCell>
            <TableCell align="right">{t("Comments")}</TableCell>
            <TableCell align="right">{t("Nickname")}</TableCell>
            <TableCell align="right">{t("Edit/Delete")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.firstname}>
              <TableCell component="th" scope="row">
                {row.firstname}
              </TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.comment}</TableCell>
              <TableCell align="right">{row.nickname}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
