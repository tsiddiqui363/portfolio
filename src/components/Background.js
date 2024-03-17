import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import styles from './Background.module.css'; // This is how you import the CSS module
import fallbackImage from '../assets/images/fallback.jpg'; // Adjust the path to where your image is located


const langs = [
    "C",
    "C++",
    "Java",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "SQL",
    "Pandas",
    "scikit learn",
    "matplotlib",
    "C#",
    "React",
	"C",
    "C++",
    "Java",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "SQL",
    "Pandas",
    "scikit learn",
    "matplotlib",
    "C#",
    "React"
];

const Background = () => {
    const sketchRef = useRef();

    useEffect(() => {
        const sketch = (p) => {
            let charSize = 35;
            let streams = [];

            class Char {
                constructor(value, x, y, speed) {
                    this.value = value;
                    this.x = x;
                    this.y = y;
                    this.speed = speed;
                }
            
                draw() {
                    let distance = p.dist(p.mouseX, p.mouseY, this.x, this.y);
                    let opacity = p.map(distance, 0, 200, 255, 0);
                    opacity = p.constrain(opacity, 0, 255);
                    p.fill(120, 100, 100, opacity);
                    p.text(this.value, this.x, this.y);
                    this.y = this.y > p.height ? 0 : this.y + this.speed;
                }
            }

            class Stream {
                constructor(text, x) {
                    const y = p.random(-500, -50);
                    const speed = p.random(1, 5);
                    this.chars = [];
                    for (let i = 0; i < text.length; i++) {
                        this.chars.push(new Char(text[i], x, y + i * charSize, speed));
                    }
                }

                draw() {
                    p.fill(120, 100, 100);
                    this.chars.forEach((c, i) => {
                        const lit = p.random(100);
                        if (lit < 30) {
                            p.fill(120, 100, 90);
                        }
                        c.draw();
                    });
                }
            }

            const createStreams = () => {
                streams = [];
                for (let i = 0; i < p.width; i += charSize * 0.65) {
                    streams.push(new Stream(p.random(langs), i));
                }
            };

            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight);
                createStreams();
                p.frameRate(60);
                p.colorMode(p.HSB);
                p.noStroke();
                p.textSize(charSize);
                p.textFont("monospace");
                p.background(0);
            };

            p.draw = () => {
                p.background(0, 0.4);
                streams.forEach((s) => s.draw());
            };

            p.windowResized = () => {
                if (p) {
                    p.resizeCanvas(p.windowWidth, p.windowHeight);
                    createStreams();
                }
            };


        };

        const myp5 = new p5(sketch, sketchRef.current);

        // Return a cleanup function to remove the sketch on unmount
        return () => {
            myp5.remove();
        };
    }, []);

    // Inside your component's return statement
    return (
        <div className={styles.container}>
        <div style={{ backgroundImage: `url(${fallbackImage})` }}></div>
        <div ref={sketchRef}></div>
        </div>
    );
  
};

export default Background;
