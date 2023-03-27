import React from 'react';

function Footer() {

    var today = new Date();
    var currentyear = today.getFullYear();

    return (
        <div>
            <footer><p>Copyright © {currentyear}</p></footer>
        </div>
    );
}

export default Footer;