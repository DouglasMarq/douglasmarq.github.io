import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloatingIconsComponent from '../components/FloatingIcons/FloatingIconComponent';
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadParticlesLinksInteraction } from '@tsparticles/interaction-particles-links'
import { loadFull } from "tsparticles";
import Rodal from 'rodal';

class Home extends Component {
    constructor(props) {
        super(props);
        this.particlesLoaded = this.particlesLoaded.bind(this);

        initParticlesEngine(async engine => {
           await loadFull(engine, false);
           await loadParticlesLinksInteraction(engine, false);
           await engine.refresh(true);
        }).then(() => {
            this.setState({
                particlesInitialized: true,
            })
        });

        this.state = {
            particlesInitialized: false,
            year: new Date().getFullYear(),
            rodalModal: {
                visible: this.props.projects,
                type: ''
            }
        };
    }

    particlesLoaded(container) {
        console.log(container);
    }

    static getInitialProps({ query: { projects } }) {
        return { projects: projects, fallback: true }
    }

    handleResumeButton = () => {
        window.open('https://www.linkedin.com/in/douglas-marques-alves/', "_blank");
    };

    handleModalButton = (type) => {
        this.setState({
            rodalModal: {
                visible: !this.state.rodalModal.visible,
                type: type
            }
        });
    }

    render() {
        return (
            <div>
                <Particles
                    options={{
                        detectRetina: false,
                        fpsLimit: 60,
                        autoPlay: true,
                        particles: {
                            size: {
                                value: 1
                            },
                            number: {
                                value: 80,
                                // density: {
                                //     enable: true,
                                //     value_area: 800
                                // }
                            },
                            move: {
                                enable: true,
                                speed: 1,
                                outModes: "bounce"
                            },
                            links: {
                                distance: 120,
                                width: 0.8,
                                opacity: 0.4,
                                enable: true
                            }
                        }
                    }} />
                <header id='header' class="header">
                    <div class="u-center-content-horizontally">
                        <a href="#" class="menu-button" onClick={() => { this.handleModalButton('about') }}><span>About</span></a>
                        <a href="#" class="menu-button" onClick={() => { this.handleModalButton('projects') }}><span>Projects</span></a>
                        <a href="#" class="menu-button" onClick={this.handleResumeButton}><span>Resume</span></a>
                    </div>
                    <div class="grid">
                        <div class="col_sm-11">
                            <div class="header__text-box">
                                <h1 class="heading-primary">
                                    <span class="heading-primary--main">Douglas Marques</span>
                                    <span class="heading-primary--sub">Developer</span><span class="heading-primary--blink">|</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="grid">
                    <div id='footer' class="footer-copyright-mainpage col_lg-12" style={{ textAlign: 'center' }}>
                        <FloatingIconsComponent />
                        <span>&copy; 2021-{this.state.year} DOUGLAS MARQUES</span>
                    </div>
                    <div>
                        <Rodal closeOnEsc={true} visible={this.state.rodalModal.visible} onClose={() => { this.handleModalButton(this.state.rodalModal.type) }}>
                            <div style={{ 'margin': '1rem' }}>
                                {this.state.rodalModal.type === 'about' ?
                                    <div>
                                        <h2>Hello there, i'm Douglas Marques, a back-end developer.</h2>
                                        <br />
                                        <p>Since I was a kid I always had this urge to see what's under the hood. You know, how software and hardware works with so much harmony. I always dreamed about engineering, building things, make things so other people can use.</p>
                                        <br />
                                        <p>I began programming with 12 years old, when i was a member of a game hacking forum. To be honest, i didn't knew what i was trying to do, but I was able to do it. I made my first .DLL injector with Delphi. Then later i began to get "broken" hacks and modify them so it would start working again. I made all of these bypassing Crossfire protection engine.</p>
                                        <br />
                                        <p>It's so satisfying to see something you built working, it's even more to see other people using something you built.</p>
                                        <br />
                                        <p>I'm always looking for something. I love to do what i do because i'm always learning.</p>
                                        <br />
                                        <br />
                                        <FloatingIconsComponent />
                                    </div>
                                    :
                                    <div>
                                        <h1>WORK IN PROGRESS</h1>
                                    </div>
                                }
                            </div>
                        </Rodal>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    ({  }) => ({
    }),
    {
    }
)(Home);
