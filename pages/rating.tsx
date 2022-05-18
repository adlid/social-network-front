import { Paper, Typography,Tabs ,Tab,Table,TableHead,TableRow,TableCell,TableBody} from '@mui/material'
import React from 'react'
import { MainLayout } from '../layouts/MainLayout'
import {AddOutlined} from '@mui/icons-material'
import { FollowButton } from '../components/FollowButton'
export default function Rating() {
  return (
    <MainLayout hideComments>
      <Paper className="pl-20 pt-20 pr-20 mb-20" elevation={0}>
        <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 6 }}>
          Рейтинг сообществ и блогов
        </Typography>
        <Typography style={{ fontSize: 15 }}>
          Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из рейтинга по итогам
          месяца бесплатно получают Plus-аккаунт на месяц.
        </Typography>
        <Tabs className="mt-10" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Август" />
          <Tab label="За 3 месяцуа" />
          <Tab label="За всё время" />
        </Tabs>
      </Paper>

      <Paper elevation={0}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователя</TableCell>
              <TableCell align="right">Рейтинг</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
          
              <TableRow key="1">
                <TableCell component="th" scope="row">
                  <span className="mr-15">1</span>
                 John Smith
                </TableCell>
                <TableCell align="right">wewewewe</TableCell>
                <TableCell align="right">
                  <FollowButton/>
                </TableCell>
              </TableRow>
           
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  )
}
