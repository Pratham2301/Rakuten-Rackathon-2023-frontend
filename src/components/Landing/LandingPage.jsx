import React from 'react'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
/* import Lottie from "lottie-react";
import technologyGuy from "../../Assets/techLottie.json";
import knowlegdeLottie from "../../Assets/knowledgeLottie.json";
import overallDevLottie from "../../Assets/overallDevLottie.json"; */

export default function LandingPage() {
    return (
        <Grid container justifyContent="center">
            <Grid
                item
                xs={11}
                sx={{
                    my: "3%",
                    padding:'5%',
                    backgroundColor:'#c6e3fa',
                    borderRadius:'5%'
                }}
            >
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    columns={{ xs: 1, sm: 1, md: 8 }}
                >
                    <Grid container justifyContent="center">
                        <Typography
                            variant="h2"
                            sx={{
                                fontFamily: "Figtree",
                                fontStyle: "normal",
                                fontWeight: 900,
                                textAlign: "left",
                                fontSize: 50,
                                my: 0,
                                mx: 2,
                                color: "#000000",
                                '@media (max-width: 780px)': {
                                    fontSize: 38,
                                }
                            }}
                        >
                            Welcome to Finoa.ai
                        </Typography>
                    </Grid>
                    <Grid item xs={5} sx={{ textDecoration: false, padding: 2 }}>
                        <br></br>
                        <Typography
                            sx={{
                                fontFamily: "Figtree",
                                fontStyle: "normal",
                                fontWeight: 700,
                                textAlign: "left",
                                fontSize: 30,
                            }}
                        >
                            Your one stop Fashion Assistant
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Figtree",
                                fontStyle: "normal",
                                fontWeight: 400,
                                textAlign: "left",
                                fontSize: 22,
                                my: 2,
                            }}
                        >
                            We believe that providing exposure to the students would help them
                            to know new tech related innovations and help them to meet new
                            tech enthusiast that would benefit them by gaining knowledge.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{
                            textDecoration: false,
                            padding: 2,
                            "@media (max-width:780px)": {
                                display: "none",
                            },
                        }}
                    >
                        <div className="div1">
                            <img src="https://i.imgur.com/VksjNx4.png" alt="Fshion Outfit" style={{ width: '300px', height: '300px' }} />
                        </div>
                    </Grid>
                </Grid>
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 12 }}
                    columns={{ xs: 1, sm: 1, md: 8 }}
                >
                    <Grid
                        item
                        xs={3}
                        sx={{
                            textDecoration: false,
                            padding: 2,
                            "@media (max-width:780px)": {
                                display: "none",
                            },
                        }}
                    >
                        <div className="div1" sx={{ padding: 5 }}>
                            <img src="https://i.imgur.com/BEJM6KP.jpg" alt="Print On Demand" style={{ width: '300px', height: '300px' }} />
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sx={{
                            textDecoration: false,
                            padding: 2,
                            paddingRight: 12,
                            "@media (max-width:780px)": {
                                paddingRight: 5,
                            },
                        }}
                    >
                        <div className="div1" sx={{ padding: 5 }}>
                            <Typography
                                sx={{
                                    fontFamily: "Figtree",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    fontSize: 30,
                                    textAlign: "right",

                                    "@media (max-width:780px)": {
                                        textAlign: "left",
                                    },
                                }}
                            >
                                Print On Demand Designs
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "Figtree",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    my: 2,
                                    fontSize: 22,
                                    textAlign: "right",
                                    "@media (max-width:780px)": {
                                        textAlign: "left",
                                    },
                                }}
                            >
                                In the GFG Students chapter our primary goal is to impart
                                knowledge and build a large network of passionate developers,
                                programmers, coders and learners in the field of computer
                                science and we aim to achieve the same by providing a platform
                                to students to learn, build and enhance their skills.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    columns={{ xs: 1, sm: 1, md: 8 }}
                >
                    <Grid item xs={5} sx={{ textDecoration: false, padding: 2 }}>
                        <div className="div1" sx={{ padding: 5 }}>
                            <Typography
                                sx={{
                                    fontFamily: "Figtree",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    fontSize: 30,
                                    textAlign: "left",
                                }}
                            >
                                Advertisements
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "Figtree",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    textAlign: "left",
                                    my: 2,
                                    fontSize: 22,
                                }}
                            >
                                We aim to help students develop fine coding skills and reach the
                                best of their potential. Grow students’ knowledge in the field
                                in a peer-peer learning environment. Facilitate guidance and
                                resources for internships, placement, and competitive exam
                                preparation.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{
                            textDecoration: false,
                            padding: 2,
                            "@media (max-width:780px)": {
                                display: "none",
                            },
                        }}
                    >
                        <div className="div1" sx={{ padding: 5 }}>
                            <img src="https://i.imgur.com/vuRWhlX.png" alt="Advertisements" srcset=""  style={{ width: '300px', height: '300px' }}/>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}