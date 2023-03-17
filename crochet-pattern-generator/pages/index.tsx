import Head from 'next/head'
import { useState } from 'react';
// import styles from '@/styles/Home.module.css'

const defaultSwatchStitches = 16;
const defaultSwatchRows = 10;
const defaultCircumference = 22;  // inches
const defaultHeight = 7;  // inches

export default function Home() {
  const [swatchStitches, setSwatchStitches] = useState(defaultSwatchStitches.toString());
  const [swatchRows, setSwatchRows] = useState(defaultSwatchRows.toString());
  const [circumference, setCircumference] = useState(defaultCircumference.toString());
  const [height, setHeight] = useState(defaultHeight.toString());
  const [patternText, setPatternText] = useState("pattern will be here.");

  const generateButtonClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    
    console.log("Clicked!");

    let stPerIn = parseInt(swatchStitches) / 4;
    let rowPerIn = parseInt(swatchRows) / 4;

    let sts = Math.ceil(stPerIn * parseInt(height));
    let rows = Math.ceil(rowPerIn * parseInt(circumference));

    setPatternText("You need to crochet a rectangle that is " + sts + " stitches wide and " + rows + " rows tall. Then you sew together the small sides and cinch the long side to form a beanie.");
  }

  return (
    <>
      <Head>
        <title>Crochet Pattern Generator</title>
        <meta name="description" content="Crochet Pattern Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <h1>Crochet Beanie Pattern Generator</h1>
        <div>
          <form onSubmit={generateButtonClick}>
            <div>
              <label># stitches in 4":</label>
              <input 
                type="number" 
                name="swatchStitches" 
                defaultValue={defaultSwatchStitches} 
                onChange={(event) => setSwatchStitches(event.target.value)}>
              </input>
              <br></br>
              <label># rows in 4":</label>
              <input 
                type="number" 
                name="swatchRows" 
                defaultValue={defaultSwatchRows} 
                onChange={(event) => setSwatchRows(event.target.value)}>
              </input>
            </div>
            
            <div>
              <label>head circumference in inches:</label>
              <input 
                type="number" 
                name="circumference" 
                defaultValue={defaultCircumference} 
                onChange={(event) => setCircumference(event.target.value)}>
              </input>
              <br></br>
              <label>head height in inches:</label>
              <input 
                type="number" 
                name="height" 
                defaultValue={defaultHeight} 
                onChange={(event) => setHeight(event.target.value)}>
              </input>
            </div>
            <br></br>

            <button>Generate</button>
          </form>
          
          <h2>Pattern: </h2>
           <p>{patternText}</p>   
        </div>
      </main>
    </>
  )
}
