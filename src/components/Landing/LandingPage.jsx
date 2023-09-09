import React from 'react'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, Stack } from '@mui/material';
import './Landing.css'
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <Grid container justifyContent="center">
            <Grid
                item
                xs={11}
                sx={{
                    my: "3%",
                    padding: '5%',
                    backgroundColor: '#c6e3fa',
                    borderRadius: '5%'
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
                            Discover Outfits You'll Love
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
                            Our intelligent chatbot gets to know your personal style and
                            preferences, then generates outfit ideas you'll absolutely adore.
                            Just let our bot know what you're looking for, like a casual dress
                            or formal suit, and it will instantly generate customized options
                            for you. See an outfit you love? Select it to refine the bot's
                            suggestions so it continues learning your perfect fashion sense.
                            Before you know it, you'll have a closet of stunning AI-generated
                            outfits tailored just for you.
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
                                Express your unique spirit with AI-designed t-shirts printed
                                and shipped straight to you. Our generative model creates
                                one-of-a-kind tee designs based on your interests and desires.
                                Botanical prints, abstract art, minimalist styles - if you can
                                dream it, our AI will generate it onto the perfect tee for you.
                                Once you've picked your fave new t-shirt design, we'll expertly
                                print it and deliver it right to your door. Our print-on-demand
                                service makes getting custom, creative tees easier than ever.
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
                                AI-Powered Brand Advertising
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
                                Reach more customers and drive sales with our AI
                                solution for advertising and social media. Our generative
                                model helps you create mockups, prototypes, and ad concepts
                                optimized for your brand and target audience. Save time and
                                money while discovering winning new ideas. Whether you need
                                product packaging, in-store displays, or eye-catching social
                                content, our advertising AI generates on-brand creative in minutes.
                                Let us handle the ideation so you can focus on growing your business.
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
                            <img src="https://i.imgur.com/vuRWhlX.png" alt="Advertisements" srcset="" style={{ width: '300px', height: '300px' }} />
                        </div>
                    </Grid>
                </Grid>
                <Grid className='Land'>
                    <Stack direction="row" spacing={4}>
                        <Link to='/fashion'>
                            <Button variant="contained">Fashion Assistant</Button>
                        </Link>
                        <Link to='/merch'>
                            <Button variant="contained">POD Assistant</Button>
                        </Link>
                        <Link to='/ad'>
                            <Button variant="contained">Advertisement Assistant</Button>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );
}