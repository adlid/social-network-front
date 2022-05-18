import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette:{
        primary:{
            main:"#4683d9"
        }
    },
    components:{
        MuiPaper:{
            styleOverrides:{
                "rounded":{
                    borderRadius:8
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                "contained":{
                    backgroundColor:"white",
                    boxShadow:"0 1px rgb(0 0 0 / 15%",
                    "&:hover":{
                        backgroundColor:"white",
                    }
                },
                "containedPrimary":{
                    backgroundColor:"#4683d9",
                    '&:hover':{
                        backgroundColor:"#437CCE"
                    }
                }
            }
        }
    }
})
