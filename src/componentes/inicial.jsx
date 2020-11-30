import React from "react";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

import { BotaoRadio } from "./botaoRadio";
import { CampoTexto } from "./campoTexto";
import { Botao } from "./botao.jsx";
import { Check } from "./check";

export const Inicial = (props) => {

    return (
        <form >
            <Container maxWidth="md" style={{backgroundColor: '#74A0B2', borderRadius: '5%'}}>
                <Grid container spacing={12}>
                    <Grid item xs={12} style={{textAlign:'center', color: '#C2CDE3'}}>
                        <h1>Reserve a sua passagem aeria conosco e obtenha vantagens!</h1>
                    </Grid>
                    <Grid item xs={12} style={{textAlign:'center', color: 'green'}}>
                        <h2>Encontre os melhores preços e pacotes para a sua viagem!</h2>
                    </Grid>
                    <Container maxWidth="sm">
                        <div style={{  border: 'solid 2px', margin: '2%', padding: '2%', borderRadius: '10px', borderColor: '#C2CDE3' }}>
                            <Grid>
                                <h1>Tipo de viagem</h1>
                                <BotaoRadio />
                            </Grid>
                        </div>
                    </Container>
                    <Container maxWidth="sm">
                        <div style={{  border: 'solid 2px', margin: '2%', padding: '2%', borderRadius: '10px', borderColor: '#C2CDE3' }}>
                            <Grid>
                                <h1>Itinerário</h1>
                                <CampoTexto campo="Origem" />
                                <CampoTexto campo="Destino" />
                            </Grid>
                        </div>
                    </Container>
                    <Container maxWidth="sm">
                        <div style={{  border: 'solid 2px', margin: '2%', padding: '2%', borderRadius: '10px', borderColor: '#C2CDE3' }}>
                            <Grid>
                            <h1>Datas</h1>
                            <CampoTexto campo="Data Ida" />
                            <CampoTexto campo="Data Volta" />
                            <Check></Check>
                            </Grid>
                        </div>
                    </Container>
                    <Container maxWidth="sm">
                        <div style={{ border: 'solid 2px', margin: '2%', padding: '2%', borderRadius: '10px', borderColor: '#C2CDE3' }}>
                            <Grid>
                            <h1>Passageiros || Classe</h1>
                            <CampoTexto campo="Passageiros" />
                            <CampoTexto campo="Classe" />
                            </Grid>
                        </div>
                    </Container>
                    <Container maxWidth="sm">
                        <Grid>
                            <div >
                                <Botao />
                            </div>
                        </Grid>
                    </Container>
                </Grid>
            </Container>
        </form>

    );
}