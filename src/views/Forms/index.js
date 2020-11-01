import React, {useState} from 'react'
import {
    Container,
    Grid,
    TextField
} from '@material-ui/core'

const Forms = _ => {

    const [activeError, setActiveError] = useState(false)

    const handleTextEmail = e => {
        const boolEmail = new RegExp(
            /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g)
            .test(e.target.value)
        if (!boolEmail) {
            setActiveError(true)
        } else {
            setActiveError(false)
        }
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <h1>Inputs Normales</h1>
                </Grid>
                <Grid item>
                    <TextField color="secondary" label="Nombre" />
                </Grid>
                <Grid item>
                    <TextField color="secondary" label="Nombre" variant="filled" />
                </Grid>
                <Grid item>
                    <TextField color="secondary" label="Nombre" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <h1>Inputs Manejando errores</h1>
                </Grid>
                <Grid item>
                    <TextField
                        error={activeError}
                        helperText="Ingresa un correo adecuado"
                        color="secondary"
                        onChange={handleTextEmail}
                        label="Correo"
                        variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <h1>Text Area</h1>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        color="secondary"
                        label="Mucho texto"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={5}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Forms
