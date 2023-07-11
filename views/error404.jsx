const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Sorry this page can not be found</p>
            <div>
                 <img src="https://placekitten.com/200/300" alt="A really cute cat"/>
            </div>
            </main>
        </Def>
    )
}

module.exports = error404