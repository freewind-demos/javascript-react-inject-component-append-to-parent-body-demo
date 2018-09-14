import Hello from './hello.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

$(document).ready(function () {
    $('#trigger').click(function () {
        $(window.parent.document.body).append('<div id="for-inner-react">xxx</div>')

        ReactDOM.render(
            <Hello/>,
            window.parent.document.getElementById('for-inner-react')
        )
    })
})




