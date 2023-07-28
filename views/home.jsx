const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Rest Rant</h1>
                <div>
                  <img src="/images/Tacos.jpg" alt="Taco" />
                  Photo by <a href="https://unsplash.com/@jeswinthomas">Jewsin Thomas</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
