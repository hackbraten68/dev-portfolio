import React, { useEffect, useRef } from 'react';

// Keine lokale `p5`-Importe erforderlich, da es über das CDN verfügbar gemacht wird
const BackgroundSketch = () => {
    const sketchRef = useRef();

    useEffect(() => {
        const initializeP5 = async () => {
            // Lade p5.js dynamisch über das CDN, falls noch nicht vorhanden
            if (!window.p5) {
                await new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/npm/p5@1.11.2/lib/p5.min.js';
                    script.onload = resolve;
                    document.head.appendChild(script);
                });
            }

            // Prüfe, ob p5 global verfügbar ist
            if (window.p5) {
                const sketch = (s) => {
                    const dotSize = 3;
                    const spacing = dotSize * 4;
                    const minTValue = 20;
                    const areaOfEffect = 75;

                    let dots = [];
                    let isMouseMoved = false;

                    s.setup = () => {
                        s.createCanvas(s.windowWidth, s.windowHeight).parent(sketchRef.current);

                        for (let i = 0; i < s.width; i += spacing) {
                            for (let j = 0; j < s.height; j += spacing) {
                                let dot = new Dot(i + spacing / 2, j + spacing / 2, dotSize);
                                dots.push(dot);
                            }
                        }
                    };

                    s.draw = () => {
                        s.background(0);
                        dots.forEach((dot) => {
                            dot.update();
                            dot.render();
                        });
                    };

                    s.mouseMoved = () => {
                        isMouseMoved = true;
                        setTimeout(() => {
                            isMouseMoved = false;
                        }, 250);
                    };

                    s.windowResized = () => {
                        s.resizeCanvas(s.windowWidth, s.windowHeight);
                        dots = [];
                        for (let i = 0; i < s.width; i += spacing) {
                            for (let j = 0; j < s.height; j += spacing) {
                                let dot = new Dot(i + spacing / 2, j + spacing / 2, dotSize);
                                dots.push(dot);
                            }
                        }
                    };

                    class Dot {
                        constructor(x, y, size) {
                            this.x = x;
                            this.y = y;
                            this.size = size;
                            this.transparency = minTValue;
                        }

                        update() {
                            let distance = s.dist(s.mouseX, s.mouseY, this.x, this.y);
                            if (isMouseMoved && distance < areaOfEffect) {
                                this.transparency = 255;
                            } else {
                                this.transparency = s.max(minTValue, this.transparency - 10);
                            }
                        }

                        render() {
                            s.fill(255, this.transparency);
                            s.noStroke();
                            s.ellipse(this.x, this.y, this.size);
                        }
                    }
                };

                // Erstelle die p5-Instanz
                const p5Instance = new window.p5(sketch);

                // Entferne die Instanz beim Unmount
                return () => {
                    p5Instance.remove();
                };
            }
        };

        initializeP5();
    }, []);

    return <div ref={sketchRef} className="background-sketch" />;
};

export default BackgroundSketch;
