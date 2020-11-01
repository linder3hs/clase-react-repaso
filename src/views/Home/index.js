import React from 'react'
import {
    Grid,
    Button,
    Container
} from '@material-ui/core'

const Home = _ => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Button fullWidth variant="contained" color="secondary">xs 12 sm 6</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button fullWidth variant="contained" color="secondary">xs 12 sm 6</Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button fullWidth variant="contained" color="primary">xs 12 sm 4</Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button fullWidth variant="contained" color="primary">xs 12 sm 4</Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button fullWidth variant="contained" color="primary">xs 12 sm 4</Button>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Button fullWidth variant="contained" color="secondary">xs 12 sm 3</Button>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Button fullWidth variant="contained" color="secondary">xs 12 sm 3</Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Button fullWidth variant="contained" color="secondary">xs 12 sm 3</Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Button fullWidth variant="contained" color="secondary">xs 12 sm 3</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
