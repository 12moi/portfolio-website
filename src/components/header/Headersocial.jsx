import React, { Component } from 'react'
import {BsLinkedin}  from 'react-icons/bs'
import {FaGithub}  from 'react-icons/fa'

export class Headersocial extends Component {
  render() {
    return (
      <div className='header_social'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank"><FaGithub/></a>
      </div>
    )
  }
}

export default Headersocial