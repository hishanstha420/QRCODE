import qrcode from "./assets/image-qr-code.png"
import './App.css'
function App() {
  

  return (
    <main>
      <div className="container">
      <img className="image" src={qrcode} alt="qrcode" />
      <div className="info">
      <h1>
          Improve your front-end skills by building projects 
          </h1>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
       
      </div>
      </div>
    </main>
  )
}

export default App
