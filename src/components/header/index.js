import React from 'react';
import Button from '../../../src/widgets/button';
import Title from '../../widgets/topography/title';
import './header.css';

const Header = ()=>{
    return(
        <div ClassName="header">
            <h1 ClassName="main_title">Simple React App</h1>
            <Title>Welcome to Dearwalk Institute</Title>
            <Button title="Join with us"/>
        </div>
    );
}
export default Header;
