import "../App.css";

export default function Home () {
  return (
    <>
      <main className="main">
        <div className="left-main">
          <section className="home-section">
            <img src="/kuromi-peeking.png" className="kuromi-peeking" />
            <div className="home-block" contenteditable="true"></div>
          </section>
        </div>

        <div className="right-main">
          <img src="/kuromi-laughing-gif.gif" className="kuromi-laugh"></img>
        </div>
      </main>
    </>
  )
}