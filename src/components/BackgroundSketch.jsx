import React, { useEffect, useRef } from 'react';

const BackgroundSketch = () => {
    const sketchRef = useRef();

    useEffect(() => {
        const initializeP5 = async () => {
            if (!window.p5) {
                await new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/npm/p5@1.11.2/lib/p5.min.js';
                    script.onload = resolve;
                    document.head.appendChild(script);
                });
            }

            if (window.p5) {
                const sketch = (s) => {
                    const dotSize = 3;
                    const spacing = dotSize * 10;
                    const minTValue = 70;
                    const areaOfEffect = 100;

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
                        s.background('#190E32');
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
                            this.isHovered = false; // Neuer Zustand für Hover
                        }

                        update() {
                            let distance = s.dist(s.mouseX, s.mouseY, this.x, this.y);
                            if (isMouseMoved && distance < areaOfEffect) {
                                this.transparency = 255;
                                this.isHovered = true; // Markiere als gehoverted
                            } else {
                                this.transparency = s.max(minTValue, this.transparency - 10);
                                this.isHovered = false; // Zurück zum Standardzustand
                            }
                        }

                        render() {
                            if (this.isHovered) {
                                // Farbe für gehoverte Dots
                                s.fill(255, 20, 147, this.transparency); // z.B. Orange
                            } else {
                                // Weiß für nicht gehoverte Dots
                                s.fill(128, 0, 128, this.transparency);
                            }
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

    return <div ref={sketchRef} className="fixed inset-0 -z-10 pointer-events-none bg-synthwaveNachtBlau" />;
};

export default BackgroundSketch;
