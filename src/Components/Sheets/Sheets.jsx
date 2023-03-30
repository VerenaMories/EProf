import { Button } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Select from 'react-select'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import pdfLogo from "../images/PDf_IMG.png"
const Sheets = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div>
            <Container style={{ marginTop: "2%" }} >
                <h4>All Sheets</h4>
                <hr />
                <Row>
                    <Col>

                        <label>Select Grade :</label>
                        <div style={{ width: "70%" }} >
                            <Select className='mb-3' options={options} />
                        </div>
                    </Col>
                    <Col>
                        <div style={{ width: "70%", height: "10%" }} >
                            <label>Select Teacher :</label>
                            <Select className='mb-3' options={options} />
                        </div>
                    </Col>
                    <Col>
                        <div style={{ width: "70%" }}>
                            <label>Select Subject :</label>
                            <Select className='mb-3' options={options} />
                        </div>
                    </Col>
                    <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button >Filter</Button>
                    </Col>
                </Row>
                <div style={{ marginTop: "5%" }}>
                    <Row>
                        <Col md={3} style={{ display: "felx", justifyContent: "center", alignContent: "center", textAlign: "center", marginBottom: "4%" }}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={pdfLogo}
                                    title="pdf"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        PDF 1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Class Room : 1
                                        Instructor : Nour
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ display: "flex", justifyContent: "center", alignContent: "center", textAlign: 'center' }}>
                                    <Button size="small">BUY</Button>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col md={3} style={{ display: "felx", justifyContent: "center", alignContent: "center", textAlign: "center", marginBottom: "4%" }}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={pdfLogo}
                                    title="pdf"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        PDF 1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Class Room : 1
                                        Instructor : Nour
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ display: "flex", justifyContent: "center", alignContent: "center", textAlign: 'center' }}>
                                    <Button size="small">BUY</Button>
                                </CardActions>
                            </Card>
                        </Col>

                        <Col md={3} style={{ display: "felx", justifyContent: "center", alignContent: "center", textAlign: "center", marginBottom: "4%" }}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={pdfLogo}
                                    title="pdf"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        PDF 1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Class Room : 1
                                        Instructor : Nour
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ display: "flex", justifyContent: "center", alignContent: "center", textAlign: 'center' }}>
                                    <Button size="small">BUY</Button>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col md={3} style={{ display: "felx", justifyContent: "center", alignContent: "center", textAlign: "center", marginBottom: "4%" }}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={pdfLogo}
                                    title="pdf"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        PDF 1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Class Room : 1
                                        Instructor : Nour
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ display: "flex", justifyContent: "center", alignContent: "center", textAlign: 'center' }}>
                                    <Button size="small">BUY</Button>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col md={3} style={{ display: "felx", justifyContent: "center", alignContent: "center", textAlign: "center", marginBottom: "4%" }}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={pdfLogo}
                                    title="pdf"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        PDF 1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Class Room : 1
                                        Instructor : Nour
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ display: "flex", justifyContent: "center", alignContent: "center", textAlign: 'center' }}>
                                    <Button size="small">BUY</Button>
                                </CardActions>
                            </Card>
                        </Col>

                    </Row>

                </div>
            </Container>
            <br />

            <div>

            </div>
        </div>

    )
}

export default Sheets