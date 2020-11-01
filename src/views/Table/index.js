import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core"

const creatData = (name, last_name, age, weight) => {
    return {
        name, last_name, age, weight
    }
}

const rows = [
    creatData("Linder", "Hassinger", 20, 65),
    creatData("Pepito", "Zapata", 22, 70),
    creatData("Juanito", "Zapata", 21, 60),
]

const TableView = _ => {

    return (
        <Container maxWidth="lg">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>Edad</TableCell>
                            <TableCell>Peso</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map(row => (
                                <TableRow>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.last_name}</TableCell>
                                    <TableCell>{row.age}</TableCell>
                                    <TableCell>{row.weight}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default TableView
