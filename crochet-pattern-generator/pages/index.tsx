import Head from 'next/head'
import { useState } from 'react';
import styles from '@/styles/Home.module.css'

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

    setPatternText("R0: ch " + (sts+2) + 
      ".\nR1: in the third ch from the hook, hdc. Do " + (sts-1) + " more hdc across the row. ch 2 & turn. [" + sts + 
      "]\nR2-" + (rows-1) + ": " + sts + " hdc. ch 2 & turn. [" + sts + "]" +
      "\nR" + rows + ": " + sts + " hdc. Cut yarn & tie off. [" + sts + "]");
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
      <p>Crochet a gauge swatch in hdc blo.</p>
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
          <h2>Abbreviations: </h2>
          <p>ch: chain</p>
          <p>hdc: half double crochet</p>

          <h2>Pattern: </h2>
            <div className={styles.pattern}>
              <p>{patternText}</p>
            </div>
          <h2>Assembly: </h2>
          <p>Seam together the small sides to form a cylinder. Cinch one of the long sides together until it is closed enough to form the top of the hat.</p>
        </div>
      </main>
    </>
  )
}
