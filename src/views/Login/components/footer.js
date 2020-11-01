import React from 'react'
import {Link, Typography} from "@material-ui/core";

const Footer = _ => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://linderhassinger.info/">
                Codigo Alumnos
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default Footer
