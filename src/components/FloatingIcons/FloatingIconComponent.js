import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

class FloatingIconsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showName: this.props.showName || false,
        }
    }

    githubClick = event => {
        window.open('https://www.github.com/DouglasMarq/', "_blank");
    };
    linkedInClick = event => {
        window.open('https://www.linkedin.com/in/douglas-marques-alves/', "_blank");
    };
    mailClick = event => {
        window.open('mailto:douglas.marq.alves@outlook.com', "_blank");
    };

    render() {
        return (
            <div className="grid grid-center">
                {this.state.showName ? <div>
                    <a style={{ color: 'black' }} className='blog-header-center blog-header-hover' href="/" >Douglas Marques</a>
                </div> : ""}
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                    <div className="grow-container">
                        <a href="#" className='to-grey circle-button'>
                            <FontAwesomeIcon style={{'color': 'gray'}} icon={faGithub} onClick={this.githubClick} />
                        </a>
                    </div>
                    <div className="grow-container">
                        <a href="#" className='to-linkedin circle-button'>
                            <FontAwesomeIcon style={{'color': 'gray'}} icon={faLinkedin} onClick={this.linkedInClick} />
                        </a>
                    </div>
                    <div className="grow-container">
                        <a href="#" className='to-red circle-button'>
                            <FontAwesomeIcon style={{'color': 'gray'}} icon={faEnvelope} onClick={this.mailClick} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    ({ }) => ({
    }),
    {
    }
)(FloatingIconsComponent);
